(function() {
	"use strict";

	//レコード一覧画面表示後イベント
	kintone.events.on('app.record.index.show', function(event) {
		alert("画面表示後");
	});

	//レコード一覧画面のインライン編集開始時イベント
	kintone.events.on('app.record.index.edit.show', function(event) {
		alert("インライン編集開始時");
	});
    
	//レコード一覧画面のインライン編集の保存実行前イベント
	kintone.events.on('app.record.index.edit.submit', function(event) {
		alert("インライン編集の保存実行前");
	});

	//レコード一覧画面のインライン編集の保存成功後イベント
	kintone.events.on('app.record.index.edit.submit.success', function(event) {
		alert("インライン編集の保存成功後");
	});

})();