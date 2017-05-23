
(function() {
  "use strict";

  //レコード一覧フィールド変更時イベント
  kintone.events.on('app.record.create.change.city_code', function(event) {

    var record = event.record;
    var city_code = record['city_code']['value'];

    console.log(city_code);

    kintone.proxy('http://weather.livedoor.com/forecast/webservice/json/v1?city=' + city_code,
    'GET', {},{},
    function(resp) {
      var resp_json = eval("(" + resp + ")");
      console.log(resp_json);
      console.log(resp_json.description.text);
      var record = kintone.app.record.get();
      record['record']['weather']['value'] = resp_json.description.text;
      kintone.app.record.set(record);
    });

    console.log(city_code);

    });

})();
