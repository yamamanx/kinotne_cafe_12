
jQuery.noConflict();
(function() {
	"use strict";

		// ロケールを初期化
    moment.locale('ja');

    // 今日までの年月計算
    function getYearMonth(dtDate) {

        var dtToday = moment();
        var dtFrom = moment(dtDate);
        var years = 0;
        var months = 0;
				var year_month = ''

        //入力日が過去日付の場合計算
        if (!dtToday.isBefore(moment(dtFrom), 'day')) {
            years = dtToday.diff(moment(dtFrom), 'years');
            months = dtToday.diff(moment(dtFrom), 'months') % 12;
        }

				if (years > 0){
					year_month = years + "年 ";
				}
				year_month += months + "ヶ月";

        return year_month;
    }

    //入社日から勤続年月を計算
    function entring_date_change(event){

      var record = event.record;

			//入社日の値を取得
			var entering_date = record['entering_date']['value'];

			//入社日から今日までの年月を計算
			var continued_month = getYearMonth(entering_date);

			//勤続年月フィールドに計算結果を設定
			record['continued_month']['value'] = continued_month;

			return event;
    }

    var change_events = [
      'app.record.index.edit.change.entering_date',
      'app.record.create.change.entering_date',
      'app.record.edit.change.entering_date'
    ]

		kintone.events.on(change_events, function(event) {

			return entring_date_change(event);

		});


})();
