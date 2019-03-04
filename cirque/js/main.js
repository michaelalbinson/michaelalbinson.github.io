"use strict";
$(document).ready(function() {
	setTimeout(function(){$('.loading').fadeOut()}, 2000);

	$('.hamburgler').click(function(e){
		e.preventDefault();
		toggleMenu()
	});

	// purposely omit #1 and 4, 1 is the initial image, 5 is a placeholder while
    // the others load (if needed)
	$('#lo-2, #lo-3, #lo-4, #up-2, #up-3, #up-4').fadeOut();

    try {
        adjustHeader();
        startTransitions();
        // gross, but makes resizing nicer (way better than through css)
        $(window).on('resize', adjustHeader);
        
    } catch {console.log("Splash manipulation not needed; Skipping");};
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    if (this === $('.hamburgler')[0])
    	return;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function toggleMenu() {
	$('#mobile-menu').toggle();
	$('.hamburgler').toggleClass('no-hamburgler');
}

function adjustHeader() {
    let angle = Math.atan(window.innerHeight/window.innerWidth) * 180 / Math.PI;
    $(".untransform-splash-lower").css("transform", "skewY(" + angle + "deg)");
    document.getElementsByClassName("splash-lower")[0].style.transform = "skewY(-" + angle + "deg)";

    document.getElementsByClassName("untransform-splash-lower")[0].style.transform = "skewY(" + angle + "deg)";
}

function startTransitions() {
	const delay = 5000;
	let num_panes = 4;
	let current_top = "#lo-1";
	let current_bottom = "#up-1";

	let top_complete = true;
	let bottom_complete = true;

    setInterval(alternateBottom, delay);
    setTimeout(startAlternateTop, delay/2);

    function startAlternateTop() {
        alternateTop();
		setInterval(alternateTop, delay);
	}

	function alternateTop() {
        if (window.innerWidth < 600)
            return;

        if (!top_complete)
            return;

        top_complete = false;
        // console.log('bottom flip');
    	let pick = Math.floor(Math.random()*num_panes) + 1;
    	let id = '#up-' + pick;
    	do {
            pick = Math.floor(Math.random()*num_panes) + 1;
            id = '#up-' + pick;
    	} while (current_top == id);

        $(id).fadeIn();
        $(current_top).fadeOut();

    	current_top = id;
        top_complete = true;
	}

	function alternateBottom() {
        if (window.innerWidth < 600)
            return;

        if (!bottom_complete)
            return;

        bottom_complete = false;

    	// console.log('top flip');
        let pick = Math.floor(Math.random() * num_panes) + 1;
        let id = '#lo-' + pick;
		do {
            pick = Math.floor(Math.random() * num_panes) + 1;
            id = '#lo-' + pick;
        } while (current_bottom == id);

        $(id).fadeIn();
        $(current_bottom).fadeOut();
        current_bottom = id;
        bottom_complete = true;
	}
}