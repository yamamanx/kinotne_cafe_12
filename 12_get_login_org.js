(function() {
    'use strict';
    kintone.events.on('app.record.create.show', function(event) {
        var user = kintone.getLoginUser();
        var record = event.record;
        record['create_user']['value'] = [{
            "code": user.code,
            "name": user.name
        }];

        kintone.api('/v1/user/organizations',
            'GET', {
                code: user.code
            },
            function(resp) {
                var record = kintone.app.record.get();
                var organization = resp.organizationTitles[0].organization;
                record['record']['create_section']['value'] = [{
                    "code": organization.code,
                    "name": organization.name
                }];
                kintone.app.record.set(record);
            });
        return event;
    });
})();
