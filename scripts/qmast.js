function switchHeaders() {
	if($('body').width() < 500){
		$('div.mobile-header').removeClass('hidden');
		$('div.header').addClass('hidden');
	}
	else {
		$('div.mobile-header').addClass('hidden');
		$('div.header').removeClass('hidden');
	}
}