;$(function () {
  let firstDay = '';
  let myDatepicker = $('.js_dateFromDatepicker').datepicker({
              navTitles: {
                days: 'MM yyyy'
              },
              range: true,
              showOtherMonths: false,
              clearButton: true,
              offset: -4,
              nextHtml: '<span class="material-icons">arrow_forward</span>',
              prevHtml: '<span class="material-icons">arrow_back</span>',
              dateFormat: 'dd.mm.yyyy',
              onSelect: function(date, cellType) {
                      if(firstDay == '') {
                        $('.js_arriveFinding').val(getDate(myDatepicker.selectedDates[0]));
                        firstDay = myDatepicker.selectedDates[0];
                      }
                      else {
                        if(getDate(myDatepicker.selectedDates[0]) == 'Invalid Date') $('.js_arriveFinding').val('ДД.ММ.ГГГГ');
                        else $('.js_arriveFinding').val(getDate(myDatepicker.selectedDates[0]));

                        if(getDate(myDatepicker.selectedDates[1]) == 'Invalid Date') $('.js_arriveDeparture').val('ДД.ММ.ГГГГ');
                        else $('.js_arriveDeparture').val(getDate(myDatepicker.selectedDates[1]));
                      }
                  }
            }).data('datepicker');

  $("#arrive").click(function() {
    myDatepicker.show();
  });

  /*$("#arrive").change(function() {
    let newDate = new Date($(this).val().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1');
    myDatepicker.selectDate(newDate);
  });*/

  $(".js_applyDatePicker").click(function() {
    myDatepicker.hide();
  });

var options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}

function getDate(str) {
  let date = new Date(str);
  return date.toLocaleString('ru', options)
}


});
