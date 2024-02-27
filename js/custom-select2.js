$(document).ready(function() {
    $('select.select2-select').select2({
        placeholder: 'Select an option'
    });
    $('select[multiple]').select2({
        placeholder: "Select somethings ..."
    });
});