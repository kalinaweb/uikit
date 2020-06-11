console.log("finding");
;$(function () {
    $("#guests").click(function() {
        $(this).parents('.select-count').addClass('active');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".select-count").length) {
            $('.select-count').removeClass('active');
        }
        e.stopPropagation();
    });
});