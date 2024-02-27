$(document).ready(function() {
    $('.tab-link').click(function(e) {
        e.preventDefault();
        $(this).parents('.tab-nav').find('.tab-link').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tab-nav').next('.tab-content').children().hide();
        let tabContent = $('#' + $(this).attr('tab-data'));
        tabContent.fadeIn('slow');
        if (tabContent.hasClass('tab-slider')) {
            tabContent.slick('refresh');
        }
    });
});