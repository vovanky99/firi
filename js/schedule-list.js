$(function() {
    let releaseDates = $('.release-date');
    setInterval(function() {
        let curDate = new Date();
        $.each(releaseDates, function(index, value) {
            let source = $(this).text().split('/');
            let releaseDate;
            if (source !== 'undefined')
                releaseDate = new Date(source[2], source[1] - 1, source[0]);
            if (releaseDate !== 'undefined') {
                let leftTime = (releaseDate - curDate) / 1000;
                if (leftTime < 0) {
                    $($(this).parent().next().find('.time-left')).text('Released').addClass('success-msg');
                    releaseDates.splice(index, 1);
                } else {
                    //days
                    let days = Math.floor(leftTime / 86400);
                    leftTime -= days * 86400;
                    //hours
                    let hours = Math.floor(leftTime / 3600) % 24;
                    leftTime -= hours * 3600;
                    //minutes
                    let minutes = Math.floor(leftTime / 60) % 60;
                    leftTime -= minutes * 60;
                    //seconds
                    let seconds = Math.floor(leftTime % 60);

                    $($(this).parent().next().find('.time-left')).text(days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds');
                }
            }
        });
    }, 1000);
});