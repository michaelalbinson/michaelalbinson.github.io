"use strict";
$(document).ready(function() {
    setInterval(function() {
        $('.flash-block').toggle('visibility', 1);
    }, 500);

    $('.read-on').click(function() {
        var el = $('#' + $(this).parent()[0].id + '-modal');
        console.log(el);
    });
});
