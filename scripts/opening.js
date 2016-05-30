var i = 5;
window.onload = function(){
	setInterval(fadeOut, 100)
}

function fadeOut(){
	document.getElementsByClassName('gameTitle')[0].style.font_size = i;
	i--;
}