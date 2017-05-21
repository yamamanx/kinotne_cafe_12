(function() {
	"use strict";

	//レコード一覧画面表示後イベント
	kintone.events.on('app.record.index.show', function(event) {
    console.log(event.appId);
    console.log(event.viewType);
    console.log(event.viewId);
    console.log(event.viewName);
    console.log(event.offset);
    console.log(event.size);
    console.log(event.date);
    console.log(event.records);
	});

	//レコード一覧画面のインライン編集開始時イベント
	kintone.events.on('app.record.index.edit.show', function(event) {
    var record = event.record;
    record['continued_month']['disabled'] = true;
    return event;
	});

	//レコード一覧画面のインライン編集の保存実行前イベント
	kintone.events.on('app.record.index.edit.submit', function(event) {
    var record = event.record;
    if (record['emp_code']['value'].charAt(0) != 'S'){
	     record['emp_code']['error'] = '社員コードの1文字目はSにしてください';
       return event;
     }
	});

	//レコード一覧画面のインライン編集の保存成功後イベント
	kintone.events.on('app.record.index.edit.submit.success', function(event) {
		console.log('インライン編集の保存成功後');
	});

})();
