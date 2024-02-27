$(document).ready(function() {
    /* upload avatar */
    let oldImage = $('.profile-info .profile-avatar img').attr('src');
    $('.change-avatar').click(function() {
        $('input[name="fileAvatar"]').click();
    });
    $('input[name="fileAvatar"]').change(function(e) {
        if ($(this).get(0).files.length !== 0) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let img = new Image();
                img.src = e.target.result;
                img.onload = function(e) {
                    if (this.width > 0 && this.height > 0) {
                        $('.profile-info .profile-avatar img').attr('src', img.src);
                        $('.change-avatar').hide();
                        $('.save-avatar').show();
                        $('.clear-avatar').show();
                    }
                };
                img.onerror = function() {
                    alert('Please upload a valid image!');
                };
            };
            reader.readAsDataURL($(this).get(0).files[0]);
        }
    });
    $('.clear-avatar').click(function() {
        $('.profile-info .profile-avatar img').attr('src', oldImage);
        $('.change-avatar').show();
        $('.save-avatar').hide();
        $('.clear-avatar').hide();
    });
});