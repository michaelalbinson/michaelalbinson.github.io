var clickedMainBox = false;
var upDownIntervalWatcher;
var rightLeftIntervalWatcher;
var key;

var relativeTopPos = 75;
var relativeLeftPos = 25;
var absoluteTopPos = 75;
var absoluteLeftPos = 25;

var rectUpperRight = 0;
var rectUpperLeft = 0;
var rectLowerRight = 250;
var rectLowerLeft = 250;

var slowTextSpeed = 100;
var medTextSpeed = 75;
var fastTextSpeed = 50;
var devTextSpeed = 1;
var textSpeed = medTextSpeed;

var currentWindowSize = 250; //px
var limitOfMotion = currentWindowSize - 10;
var optionsFadedIn = false;

function prepareGame(){
	if (!clickedMainBox){
		document.getElementsByClassName('gameImg')[0].style.opacity = 1;
		document.getElementsByClassName('redDiv')[0].style.opacity = 1;
		document.getElementsByClassName('innerTextP')[0].innerHTML = "sweeeeeet";
		document.getElementsByClassName('startText')[0].style.display = "none";
		
		clickedMainBox = true;
	}
}

window.onkeypress = function(keydown){
	if (clickedMainBox && !optionsFadedIn){
		switch(keydown.keyCode){
			case 119:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "up";
				upDownIntervalWatcher = setTimeout(moveUp, 10);
				break;
			case 115: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "down";
				upDownIntervalWatcher = setTimeout(moveDown, 10);
				break;
			default:
				break;
			}
		switch(keydown.keyCode){
			case 97:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "left";
				rightLeftIntervalWatcher = setTimeout(moveLeft, 10);
				break;
			case 100: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "right";
				rightLeftIntervalWatcher = setTimeout(moveRight, 10);
				break;
			default:
				break;
			}
		switch(keydown.keyCode){
			case 110:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "n";
				break;
			case 109:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "m";
				checkForMessageEvent();
				break;
			default:
				document.getElementsByClassName('innerTextP')[0].innerHTML = keydown.keyCode;
		}
	}
}

window.onkeyup = function(){
	if (clickedMainBox){
		document.getElementsByClassName('innerTextP')[0].innerHTML = "nil";
		clearTimeout(upDownIntervalWatcher);
		clearTimeout(rightLeftIntervalWatcher);
	}
}

function moveUp(){
	if (relativeTopPos>10)
		relativeTopPos = relativeTopPos - 5;
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveDown(){
	if (relativeTopPos < limitOfMotion)
		relativeTopPos = relativeTopPos + 5;
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveLeft(){
	if (relativeLeftPos > 10)
		relativeLeftPos = relativeLeftPos - 5;
	document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";

}

function moveRight(){
	if (relativeLeftPos<limitOfMotion)
		relativeLeftPos = relativeLeftPos + 5;
	document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";
}

function buildRectForClip(uR, uL, lR, lL){
	var rect = "rect(" + uR.toString() + "," + lR.toString() + "," + lL.toString() + "," + uL.toString() + ")";
	return rect;
}

function changeWindowSize(size){
	if (size == currentWindowSize)
		return;
	switch(size){
		case ("large"):
			changeWindowSizeTo(600);
			break;
		case ("medium"):
			changeWindowSizeTo(500);
			console.log(size);
			break;
		case ("small"):
			changeWindowSizeTo(250);
			console.log(size);
			break;
		default:
			console.log("uncaught size change");
			break;
	}
}

function changeTextSpeed(speed){
	switch(speed){
		case ("fast"):
			textSpeed = fastTextSpeed;
			break;
		case ("medium"):
			textSpeed = medTextSpeed;
			break;
		case ("slow"):
			textSpeed = slowTextSpeed;
			break;
		default:
			console.log("uncaught speed change");
			break;
	}
}

function changeWindowSizeTo(desiredSize){
	var px = "px";
	var margin = desiredSize*(-.5) - 10;
	var imgSize = desiredSize*8;
	scrollBody = document.getElementsByClassName('scrollBody')[0];
	backgroundImg = document.getElementsByClassName('gameImg')[0];
	scrollBody.style.width = desiredSize.toString() + px;
	scrollBody.style.height = desiredSize.toString() + px;
	scrollBody.style.marginTop = margin.toString() + px;
	scrollBody.style.marginLeft = margin.toString() + px;
	backgroundImg.style.size = imgSize.toString() + px;
	limitOfMotion = desiredSize-10;
}

function fadeMenuIn(){
	fadeIn('optionsMenu');
	optionsFadedIn = true;
}

function fadeMenuOut(){
	fadeOut('optionsMenu');
	optionsFadedIn = false;
}

function checkForMessageEvent(){
	scrollBody = document.getElementsByClassName('messageDiv')[0];
	messageDiv.style.display = "inline-block";

}