var clickedMainBox = false;
var intervalWatcher;
var key;

var relativeTopPos = 75;
var relativeLeftPos = 25;
var absoluteTopPos = 75;
var absoluteLeftPos = 25;

var rectUpperRight = 0;
var rectUpperLeft = 0;
var rectLowerRight = 250;
var rectLowerLeft = 250;

function prepareGame(){
	if (!clickedMainBox){
		document.getElementsByClassName('innerTextP')[0].innerHTML = "sweeeeeet";
		document.getElementsByClassName('scrollBody')[0].style.backgroundColor = "lightblue";
		clickedMainBox = true;
	}
}

window.onkeypress = function(keydown){
	if (clickedMainBox){
		switch(keydown.keyCode){
			case 119:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "up";
				intervalWatcher = setTimeout(moveUp, 10);
				break;
			case 97:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "left";
				intervalWatcher = setTimeout(moveLeft, 10);
				break;
			case 100: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "right";
				intervalWatcher = setTimeout(moveRight, 10);
				break;
			case 115: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "down";
				intervalWatcher = setTimeout(moveDown, 10);
				break;
			case 110:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "n";
				break;
			case 109:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "m";
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
	if (relativeTopPos>10)
		relativeTopPos = relativeTopPos - 5;
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveDown(){
	if (relativeTopPos < 240)
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

function buildRectForClip(uR, uL, lR, lL){
	var rect = "rect(" + uR.toString() + "," + lR.toString() + "," + lL.toString() + "," + uL.toString() + ")";
	return rect;
}