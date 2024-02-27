$(document).ready(function() {
    $('.forgot-tab:not(:first-child)').hide();
    $('#next-step').click(function(e) {
        e.preventDefault();
        nextStep();
    });
    $('#prev-step').click(function(e) {
        e.preventDefault();
        prevStep();
    });
    focusFirstInput();
});

let stepFormTabs = $('.forgot-tab');
let currentIndex = 0;

function nextStep() {
    if (currentIndex < stepFormTabs.length - 1) {
        currentIndex++;
        $(stepFormTabs[currentIndex - 1]).hide();
        $(stepFormTabs[currentIndex]).show();
        $('#prev-step').show();
        $('#next-step').show();
        focusFirstInput();
    }
    if (currentIndex == stepFormTabs.length - 1) {
        $('#prev-step').hide();
        $('#next-step').hide();
    }
}

function prevStep() {
    if (currentIndex > 0) {
        currentIndex--;
        $(stepFormTabs[currentIndex + 1]).hide();
        $(stepFormTabs[currentIndex]).show();
        if (currentIndex == 0) {
            $('#prev-step').hide();
        }
        focusFirstInput();
    }
}

function focusFirstInput() {
    $(stepFormTabs[currentIndex]).find('input:first').focus();
}