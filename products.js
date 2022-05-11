window.onload = function () {
    $('form.custom-add2cart').each(function () {
        var form = $(this).get(0);
        if (form) {
            form.commonController.enableBackgroundSubmit()
        }
    })
};