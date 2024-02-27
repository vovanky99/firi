$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        delay: 500,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.tab-slider').slick({
        autoplay: true,
        delay: 500,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.videos-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.videos-nav-section'
    });
    $('.videos-nav-section').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.videos-section',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                vertical: false,
                arrows: false,
                dots: true,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                arrows: false,
                dots: true,
            }
        }]
    });

    $('.view-modal-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.view-modal-nav'
    });
    $('.view-modal-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.view-modal-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }],
    });

});