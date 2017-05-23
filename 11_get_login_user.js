(function() {
  "use strict";

  //レコード追加画面表示イベント
  kintone.events.on('app.record.create.show', function(event) {
    var user = kintone.getLoginUser();
    console.log(user);
    console.log(user.name);
    console.log(user.code);
  });

})();
