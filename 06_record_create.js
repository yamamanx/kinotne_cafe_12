(function() {
	"use strict";

	//レコード追加画面の表示イベント
	kintone.events.on('app.record.create.show', function(event) {
    var record = event.record;
    record['continued_month']['disabled'] = true;
    return event;
	});

	//レコード追加画面の保存実行前イベント
	kintone.events.on('app.record.create.submit', function(event) {
    var record = event.record;
    if (record['emp_code']['value'].charAt(0) != 'S'){
	     record['emp_code']['error'] = '社員コードの1文字目はSにしてください';
       return event;
     }
	});

	//レコード追加画面の保存成功後イベント
	kintone.events.on('app.record.create.submit.success', function(event) {
		console.log('インライン編集の保存成功後');
	});

})();
