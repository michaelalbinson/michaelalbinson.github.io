function fadeIn(element){
	if (document.getElementsByClassName(element)[0].getAttribute('fadedIn') == "true")
		return;

	var opacity = 0;
	document.getElementsByClassName(element)[0].setAttribute("fadedIn", "true");
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	document.getElementsByClassName(element)[0].style.display = "block";
	var fader = window.setInterval(function(){
		if (opacity >= .99){
			clearInterval(fader);
		}
		else{
			opacity = opacity + .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
			fadingIn = true;
		}
	}, 10);
}

function onFadeIn(element, doSomething){
	if (document.getElementsByClassName(element)[0].getAttribute('fadedIn') == "true")
		return;

	document.getElementsByClassName(element)[0].setAttribute("fadedIn", "true");
	var opacity = 0;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	document.getElementsByClassName(element)[0].style.display = "block";
	var fader = window.setInterval(function(){
		if (opacity >= 1){
			clearInterval(fader);
			doSomething()
		}
		else{
			opacity = opacity + .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function fadeOut(element){
	if (document.getElementsByClassName(element)[0].getAttribute('fadedIn') == "false")
		return;

	document.getElementsByClassName(element)[0].setAttribute("fadedIn", "false");
	var opacity = 1;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	var fader = window.setInterval(function(){
		if (opacity <= 0){
			document.getElementsByClassName(element)[0].style.display = "none";
			clearInterval(fader);
		}
		else{
			opacity = opacity - .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function onFadeOut(element, doSomething){
	if (document.getElementsByClassName(element)[0].getAttribute('fadedIn') == "false")
		return;

	document.getElementsByClassName(element)[0].setAttribute("fadedIn", "false");
	fadingOut = true;
	var opacity = 1;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	var fader = window.setInterval(function(){
		if (opacity <= 0){
			document.getElementsByClassName(element)[0].style.display = "none";
			clearInterval(fader);
			doSomething();
		}
		else{
			opacity = opacity - .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

//function to fade out text and shrink the text as it fades
//the font size of the element will be reset after it is hidden,
//in case it will be displayed again
//element: any element with text you wish to shrink
//initFontSize: initial font size in em (should be in em, otherwise weird things will happen)
function fadeOutWithShrinkingText(element, initFontSize){
	if (document.getElementsByClassName(element)[0].getAttribute('fadedIn') == "false")
		return;

	document.getElementsByClassName(element)[0].setAttribute("fadedIn", "false");
	var opacity = 1;
	var iFS = initFontSize;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	var fader = window.setInterval(function(){
		if (opacity <= 0){
			document.getElementsByClassName(element)[0].style.display = "none";
			document.getElementsByClassName(element)[0].style.fontSize = initFontSize.toString() + 'em';
			clearInterval(fader);
		}
		else{
			opacity = opacity - .01;
			iFS -= .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
			document.getElementsByClassName(element)[0].style.fontSize = iFS.toString() + 'em';
		}
	}, 20);
}