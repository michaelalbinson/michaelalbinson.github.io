"use strict";
$(document).ready(function() {
	setTimeout(function(){$('.loading').fadeOut()}, 2000)

	$('.hamburgler').click(function(e){
		e.preventDefault();
		toggleMenu()
	});
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    if (this == $('.hamburgler')[0])
    	return;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function toggleMenu() {
	$('#mobile-menu').toggle();
	$('.hamburgler').toggleClass('no-hamburgler');
}

$(window).resize(function() {
  	$('.box').matchHeight();
});

$(function() {
    $('.box').matchHeight();
});