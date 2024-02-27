$(document).ready(function() {
    $('#login-link').click(function(e) {
        e.preventDefault();
        $('.modal-overlay').fadeIn(500);
        $('.modal-overlay > div').hide();
        $('.login-modal').fadeIn('slow').find('input:first').focus();
    });
    $('#signup-link').click(function(e) {
        e.preventDefault();
        $('.modal-overlay').fadeIn(500);
        $('.modal-overlay > div').hide();
        $('.signup-modal').fadeIn('slow').find('input:first').focus();;
    });
    $('.modal-overlay').click(function(e) {
        if ($(e.target).hasClass('modal-overlay')) {
            $(this).fadeOut(500);
            $(this).children().fadeOut(500);
        }
    });
    $('.media-view').on('click', function(e) {
        e.preventDefault();
        $('.view-modal-overlay').fadeIn(500);
        $('.view-modal-overlay > .view-modal > div').hide();
        $('.view-modal-nav, .view-modal-slider').fadeIn('slow');
        $('.view-modal-slider').slick('refresh');
        $('.view-modal-nav').slick('refresh');
    });
    $('.close-view-modal').on('click', function() {
        $(this).parent().parent().hide();
    });
    $('.trailer-button').click(function(e) {
        e.preventDefault();
        $('.view-modal-overlay').fadeIn(500);
        $('.view-modal-overlay > .view-modal > div').hide();
        $('.view-trailer').fadeIn('slow');
    });
});