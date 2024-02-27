$(document).ready(function() {

    let menuOffSetTop = $('.main-menu').offset().top;

    $('.preload').delay(1000).fadeOut(1000);

    $('.to-top-link').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= menuOffSetTop && $(window).width() > 768) {
            $('.menu-container').addClass('sticky-top');
        } else {
            $('.menu-container').removeClass('sticky-top');
        }
    });

    $('.toggle-menu-icon').click(function() {
        $('.site-menu').stop().slideToggle(500);
    });

    $('li.parent-menu').hover(function() {
        $(this).children('.child-menu').stop().slideToggle(300);
    });

    $('.profile-menu').hover(function(e) {
        e.preventDefault();
        $('.profile-menu .account-child').stop().slideToggle(300);
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.site-menu').show();
        } else {
            $('.site-menu').hide();
        }
    });

    $('.top-search .search-input').bind('change paste keyup focusin', function() {
        showSearchResult();
    });
    $('.top-search .search-type').change(function() {
        showSearchResult();
    });
});

function showSearchResult() {
    if ($('.top-search .search-input').val().length > 0) {
        if ($('.top-search .search-type :selected').val() == 4) {

            $('.top-search .multi-result').show();
            $('.top-search .single-result').hide();
        } else {
            $('.top-search .multi-result').hide();
            $('.top-search .single-result').show();
        }
        $('.top-search .top-result').stop().slideDown(500);
    } else {
        $('.top-search .top-result').stop().slideUp(500);
    }
}