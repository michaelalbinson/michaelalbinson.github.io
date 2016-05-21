function buildString(string){
	if (!continueFlag){
		if(holder == string.length+8){
			clearInterval(interval1);
			continueFlag = true;
			return;
		}
		document.getElementsByClassName('gameText')[0].innerHTML = "/Master/: ~toUser$ " + string.substring(0, holder);
		holder++;
	}
}

function deleteString(string){
	if (continueFlag){
		if (holder == 0){
			clearTimeout(interval2);
			completeFlag = false;
			intervalsSetFlag = false;
		}

		document.getElementsByClassName('gameText')[0].innerHTML = "/Master/: ~toUser$ " + string.substring(0, holder);
		holder--;
	}
}

function toggleBox(){
	var stuffToChange =  document.getElementsByClassName('blinkingBox')[0].style.display;
	if(boxStatus){
		document.getElementsByClassName('blinkingBox')[0].style.display = "none";
		boxStatus = false;
	}
	else{
		document.getElementsByClassName('blinkingBox')[0].style.display = "inline-block" ;
		boxStatus = true;
	}
}

window.onload = function(){
	setInterval(toggleBox, 750);
}

function fadeIn(element){
	var opacity = 0;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	document.getElementsByClassName(element)[0].style.display = "block";
	var fader = window.setInterval(function(){
		if (opacity >= 1){
			clearInterval(fader);
		}
		else{
			opacity = opacity + .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function onFadeIn(element, doSomething){
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

function resetTextIntervals(){
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(masterInterval);
	completeFlag = true;
	continueFlag = false;
	intervalsSetFlag = false;
	holder = 1;
	stringsRun = 0;
}