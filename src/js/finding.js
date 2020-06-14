;$(function () {

    let $valueMinus = $(".js_minus"); /*Кнопка минус*/
    let $valuePlus = $(".js_plus"); /*Кнопка плюс*/
    let $numTypeCuests = $(".js_num"); /*Кнопка плюс*/
    let $inputGuests = $("#guests"); /*Поле Гости*/
    let $clearGuests = $(".js_clearGuests"); /*Кнопка очистить в форме Гости*/
    let $applyGuests = $(".js_applyGuests"); /*Кнопка применить в форме Гости*/

    $applyGuests.click(function () {
        $(this).parents('.select-count__container').removeClass('pullDown').addClass('fadeOut');
        $('.select-count').removeClass('active');
    });

    $clearGuests.click(function () {
        $inputGuests.val('Сколько гостей');
        $valueMinus.addClass('transparent');
        $numTypeCuests.html(0);
    });

    $valuePlus.click(function () {
        /*Увеличение значения между минусом и плюсом*/
        let $countNumber = $(this).siblings('.js_num');
        let number = parseFloat($countNumber.html());
        $countNumber.html(+number + 1);
        $(this).siblings().removeClass('transparent');
        $('.select-count__buttons span').removeClass('transparent');

        /*Подсчет числа гостей*/
        let summ = parseFloat($inputGuests.val());
        if($inputGuests.val() == 'Сколько гостей') {
            summ = 0;
        }
        summ++;
        $inputGuests.val(summ + postFixForGuests(summ));
    });

    $valueMinus.click(function () {
        /*Уменьшение значения между минусом и плюсом*/
        let $countNumber = $(this).siblings('.js_num');
        let number = parseFloat($countNumber.html());
        if (number > 0) {
            if(number == 1) {
                $(this).addClass('transparent');
            }
            $countNumber.html(+number - 1);
        }

        /*Подсчет числа гостей*/
        let summ = parseFloat($inputGuests.val());
        summ--;
        if(summ == 0) {
            $inputGuests.val('Сколько гостей');
            $('.select-count__buttons span').addClass('transparent');
        }
        else $inputGuests.val(summ + postFixForGuests(summ));
    });

    function postFixForGuests(number) {
        let string = '';
        let last = number % 10;
        if (number > 0 && number < 11 || number > 15) {
            if (last == 1) {
                string = 'гость';
            } else if (last > 1 && last < 5) {
                string = 'гостя';
            } else string = 'гостей';
        }
        else {
            string = 'гостей';
        }
        //console.log(string);
        return ' ' + string;
    }

    /*Открытие выпадающего списка Гости*/
    $("#guests").click(function() {
        $(this).parents('.select-count').addClass('active');
        $(this).parents('.select-count').find('.select-count__container').removeClass('fadeOut').addClass('pullDown');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".select-count").length) {
            $('.select-count').removeClass('active');
        }
        e.stopPropagation();
    });
});