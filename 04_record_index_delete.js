(function() {
  "use strict";

  //レコード一覧画面削除前イベント
  kintone.events.on('app.record.index.delete.submit', function(event) {
      event.error = '削除は出来ません。不要なレコードは「無効」をチェックしてください。'
      return event;
  });

})();
