(function() {
  "use strict";

  //レコード詳細画面表示イベント
  kintone.events.on('app.record.detail.show', function(event) {
    kintone.app.record.setFieldShown('emp_code',false);
  });

  //レコード詳細画面削除イベント
  kintone.events.on('app.record.detail.delete.submit',function(event){
    event.error = '削除は出来ません。不要なレコードは「無効」をチェックしてください。'
    return event;
  });

  //プロセス管理のアクション実行時のイベント
  kintone.events.on('app.record.detail.process.proceed',function(event){
    console.log(event.status);
    console.log(event.nextStatus);
    console.log(event.nextStatus['value']);
    if (event.nextStatus['value'] == '処理中'){
      var record = event.record;
      if (record['entering_date']['value'] == null){
        event.error = '処理中にする前に入社日を入力してください。'
        return event;
      }
    }
  });

})();
