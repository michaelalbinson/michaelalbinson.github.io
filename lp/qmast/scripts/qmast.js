var desktop = false;

function switchHeaders() {
	if($('body').width() < 500){
		$('div.mobile-header').removeClass('hidden');
		$('div.header').addClass('hidden');
		desktop = false;
	}
	else {
		$('div.mobile-header').addClass('hidden');
		$('div.header').removeClass('hidden');
		desktop = true;
	}
}

function switchHeadersAndZoomIn() {
	switchHeaders();
	$('img.logo').animate({
		width: "30%"
	})
}