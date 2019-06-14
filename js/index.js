"use strict";
$(document).ready(function() {
    setInterval(function() {
        $('.flash-block').toggle('visibility', 1);
    }, 500);

    $('.read-on').click(function() {
        let el = $('#' + $(this).parent()[0].id + '-modal');
        console.log(el);
    });

    $('button.show-brief').click(showBrief)

    function showBrief(e) {
    	const ROTATE = "rotate(180deg)";
    	const BLOCK = "block";
    	const NONE = "none";
    	let paperclip = this.parentNode.querySelector('.paper-clip-icon');

    	if (this.style.transform) {
    		this.style.transform = "";
    		this.parentNode.querySelector('.brief').style.display = NONE;
    		if (paperclip)
    			paperclip.style.display = NONE;

    	} else {
    		this.style.transform = ROTATE;
    		this.parentNode.querySelector('.brief').style.display = BLOCK;
    		if (paperclip)
    			paperclip.style.display = BLOCK;
    	}
    }
});