var i = 1.75;
var interval;
window.onload = function(){
	interval = setInterval(fadeOut, 5)
}

function fadeOut(){
	var opacityThing = (i/1.75).toString();
	document.getElementsByClassName('gameTitle')[0].style.fontSize = i.toString() + "em";
	document.getElementsByClassName('gameTitle')[0].style.opacity =opacityThing ;
	i=i-.001;
	if (i < .5){
		document.getElementsByClassName('gameTitle')[0].style.fontSize = 0;
		clearInterval(interval);
		fadeIn('paragraph');
	}
	console.log(opacityThing);
}