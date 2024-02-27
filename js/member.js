$(document).ready(function() {
    $('.tab-link').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).parents('.member-tab').find('.tab-link.active').removeClass('active');
            let tabContent = $(this).parents('.member-tab').next('.member-content');
            tabContent.children().hide();
            $(this).addClass('active');
            $('#' + $(this).attr('tab-data')).slideDown(function() {
                $(this).find('input:first').focus();
            });
            if ($(window).width() <= 768) {
                $('.site-menu').slideUp(500);
            }
        }
    });
    $('.main-menu .right-menu a').click(function(e) {
        e.preventDefault();
        $('.member-tab a[tab-data="' + ($(this).attr('id') == 'login-link' ? 'login-form' : 'signup-form' + '"]')).click();
    });
});