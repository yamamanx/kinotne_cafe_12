(function() {
  "use strict";

  //レコード詳細画面表示イベント
  kintone.events.on('app.record.print.show', function(event) {
    kintone.app.record.setFieldShown('emp_name',false);
  });

})();
