/*
* Overall game manager
*/

var clickedMainBox = false;

var relativeTopPos = 75;
var relativeLeftPos = 25;
var absoluteTopPos = 75;
var absoluteLeftPos = 25;

var slowTextSpeed = 100;
var medTextSpeed = 75;
var fastTextSpeed = 50;
var devTextSpeed = 1;
var textSpeed = medTextSpeed;

var currentWindowSize = 250; //px
var limitOfMotion = currentWindowSize - 10;
var optionsFadedIn = false;

var pressedKeyMap = {
	'A':false,
	'W':false,
	'S':false,
	'D':false,
	'N':false,
	'M':false,
	'enter':false};

var actionMap = {
	'A': moveLeft,
	'S': moveDown,
	'D': moveRight,
	'W': moveUp,
	'M': checkForMessageEvent,
	'N': logSomething,
	'enter': logSomething
};


function logSomething(){
	console.log("to be implemented")
}

function prepareGame(){
	if (!clickedMainBox){
		document.getElementsByClassName('gameImg')[0].style.opacity = 1;
		document.getElementsByClassName('redDiv')[0].style.opacity = 1;
		document.getElementsByClassName('startText')[0].style.display = "none";
		
		clickedMainBox = true;
	}
}

/* movementManager
*
*/

window.onkeydown = function(keydown){
	if (keydown.keyCode == 65)
		pressedKeyMap['A'] = true;
	else if (keydown.keyCode == 87)
		pressedKeyMap['W'] = true;
	else if (keydown.keyCode == 83)
		pressedKeyMap['S'] = true;
	else if (keydown.keyCode == 68)
		pressedKeyMap['D'] = true;
	else if (keydown.keyCode == 78)
		pressedKeyMap['N'] = true;
	else if (keydown.keyCode == 77)
		pressedKeyMap['M'] = true;
	else if (keydown.keyCode == 13)
		pressedKeyMap['enter'] = true;
}

window.onkeyup = function(keydown){
	if (keydown.keyCode == 65)
		pressedKeyMap['A'] = false;
	else if (keydown.keyCode == 87)
		pressedKeyMap['W'] = false;
	else if (keydown.keyCode == 83)
		pressedKeyMap['S'] = false;
	else if (keydown.keyCode == 68)
		pressedKeyMap['D'] = false;
	else if (keydown.keyCode == 78)
		pressedKeyMap['N'] = false;
	else if (keydown.keyCode == 77)
		pressedKeyMap['M'] = false;
	else if (keydown.keyCode == 13)
		pressedKeyMap['enter'] = false;
}

window.onload = function(){
	setInterval(checkIfMotionRequired, 100);
}

function checkIfMotionRequired(){
	if (messageDisplayed)
		return;

	for (key in pressedKeyMap){
		if (pressedKeyMap[key])
			actionMap[key]();
	}
}

function moveDown(){
	if (relativeTopPos < limitOfMotion)
		relativeTopPos = relativeTopPos + 5;
	document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
}

function moveUp(){
	if (relativeTopPos>10)
		relativeTopPos = relativeTopPos - 5;
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

/* Preference Manager
*
*/

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
	backgroundImg.style.size = desiredSize.toString() + px;
	limitOfMotion = desiredSize-10;
	currentWindowSize = desiredSize;
}

function fadeMenuIn(){
	fadeIn('optionsMenu');
	optionsFadedIn = true;
}

function fadeMenuOut(){
	fadeOut('optionsMenu');
	optionsFadedIn = false;
}

/* Message Manager Class
*
*/
var messageDisplayed = false;
var messageArrayComplete = false;
var messageIntervalWatcher;

function checkForMessageEvent(){
	message = checkPositionForMessage();
	displayMessages(message);
	
}

function displayMessages(message){
	if (messageDisplayed)
		return;

	var i = 0;;

	messageDisplayed = true;
	messageIntervalWatcher = setInterval(function(){
		scrollBody = document.getElementsByClassName('messageDiv')[0];
		scrollBody.style.display = "inline-block";
		scrollBody.innerHTML = message[i];
		if (i >= message.length-1){
			clearInterval(messageIntervalWatcher)
			setTimeout(hideMessage, 1000)
			return;
		}
		i++;
	}, 1000);	
}

function hideMessage() {
	scrollBody = document.getElementsByClassName('messageDiv')[0].style.display = "none";
	messageDisplayed = false;
}

// stub
function checkPositionForMessage(){
	return ["I built this message array", "to practice using", "longer strings that are very interesting"];
}
