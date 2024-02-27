$(document).ready(function() {

    let curScore = -1;
    let scoreStars = $('.form-score i');

    $('.rate-star i').click(function() {
        let activeTab = $('.tab-nav').find('.tab-link.active');
        if (activeTab.attr('id') != 'review') {
            activeTab.removeClass('active');
            let reviewTab = $('.tab-nav').find('.tab-link[tab-data=review]');
            reviewTab.addClass('active');
            $('.tab-nav').next('.tab-content').children().hide();
            $('#' + reviewTab.attr('tab-data')).show();
        }
        curScore = $(this).index();
        let scoreStars = $('.form-score i');
        $.each(scoreStars, function() {
            if ($(this).index() <= curScore) {
                $(this).addClass('fas').removeClass('far');
            } else {
                $(this).addClass('far').removeClass('fas');
            }
        });
        $('#review .form-input').focus();
    });

    $('.form-score i').hover(function() {
        for (let i = 0; i <= $(this).index(); i++) {
            $(scoreStars[i]).addClass('fas').removeClass('far');
        }
    }, function() {
        $.each(scoreStars, function() {
            if ($(this).index() <= curScore) {
                $(this).addClass('fas').removeClass('far');
            } else {
                $(this).addClass('far').removeClass('fas');
            }
        });
    });


    $('.form-score i').click(function() {
        curScore = $(this).index();
        $.each(scoreStars, function() {
            if ($(this).index() <= curScore) {
                $(this).addClass('fas').removeClass('far');
            } else {
                $(this).addClass('far').removeClass('fas');
            }
        });
    });


});