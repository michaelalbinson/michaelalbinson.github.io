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

var gameWindowSize = 250;
var mapTotalWidth = 2000;

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
	if (clickedMainBox){
		switch(keydown.keyCode){
			case 119:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "up";
				upDownIntervalWatcher = setTimeout(moveUp, 10);
				break;
			case 97:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "left";
				rightLeftIntervalWatcher = setTimeout(moveLeft, 10);
				break;
			case 100: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "right";
				rightLeftIntervalWatcher = setTimeout(moveRight, 10);
				break;
			case 115: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "down";
				upDownIntervalWatcher = setTimeout(moveDown, 10);
				break;
			case 110:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "n";
				break;
			case 109:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "m";
				document.getElementsByClassName('messageDiv')[0].style.display = "block";
				document.getElementsByClassName('messageDiv')[0].innerHTML = "you've found a message";
				setTimeout(hideMessage, 100);
				break;
			default:
				document.getElementsByClassName('innerTextP')[0].innerHTML = keydown.keyCode;
		}
	}
}

window.onkeyup = function(){
	if (clickedMainBox){
		document.getElementsByClassName('innerTextP')[0].innerHTML = "nil";
		clearTimeout(intervalWatcher);
	}
}

function moveUp(){
	if (relativeTopPos>10 && relativeTopPos<120 && absoluteTopPos < 125){
		relativeTopPos = relativeTopPos - 5;
		absoluteTopPos = relativeTopPos;
	}
	else if (relativeTopPos >= 120 && relativeTopPos <= 130 && absoluteTopPos >= 120 && absoluteTopPos <= mapTotalWidth - 250){
		absoluteTopPos = absoluteTopPos - 5;
		var setRect = buildRectForClip(absoluteTopPos, absoluteLeftPos)
	}
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveDown(){
	if (relativeTopPos < 240 && relativeTopPos > 125)
		relativeTopPos = relativeTopPos + 5;
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveLeft(){
	if (relativeLeftPos > 10)
		relativeLeftPos = relativeLeftPos - 5;
	document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";

}

function moveRight(){
	if (relativeLeftPos<240)
		relativeLeftPos = relativeLeftPos + 5;
	document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";
}

function buildRectForClip(top, left){
	var right = 
	var rect = "rect(" + top.toString() + "," + lR.toString() + "," + lL.toString() + "," + left.toString() + ")";
	return rect;
}

function hideMessage(){
	document.getElementsByClassName('messageDiv')[0].style.display = "none";
}