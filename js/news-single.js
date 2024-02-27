$(document).ready(function() {
    $('.comment-reply').click(function() {
        let commentText = $('.comment-textarea');
        let replyUser = $(this).siblings('.comment-author').children('a').text();
        commentText.val(commentText.val() + '@' + replyUser);
        $('html, body').animate({
            scrollTop: $('.comment-box').offset().top - ($(window).height() / 2) + 100,
        }, 500);
    });
});