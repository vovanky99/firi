$('.detail-view, .grid-view').click(function() {
    let target = $('.' + $(this).attr('target-item'));
    let type = $(this);
    switchLayout(target, type);
});

function switchLayout(target, type) {
    if (!$(type).hasClass('active')) {
        if ($(type).hasClass('detail-view')) {
            $(target).toggleClass('grid');
            $(type).addClass('active');
            $('.grid-view').removeClass('active');
        } else {
            $(target).toggleClass('grid');
            $(type).addClass('active');
            $('.detail-view').removeClass('active');
        }
    }
}