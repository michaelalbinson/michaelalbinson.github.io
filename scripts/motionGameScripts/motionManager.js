function motionManager(){
	// variables
	this.actionMap = {
		'A': _moveLeft,
		'S': _moveDown,
		'D': _moveRight,
		'W': _moveUp,
		'M': _checkForMessageEvent,
		'N': _logSomething,
		'enter': _logSomething
	}

	this.pressedKeyMap{
		'A':false,
		'W':false,
		'S':false,
		'D':false,
		'N':false,
		'M':false,
		'enter':false};
	}

	//functions
	this.initMotionManager = initMotionManager;
	this.setLimitOfMotion = setLimitOfMotion;
	this.getLimitOfMotion = getLimitOfMotion;

	function initMotionManager() {

	}

	function _checkIfMotionRequired() {
		if (messageDisplayed)
			return;

		for (key in pressedKeyMap){
			if (pressedKeyMap[key])
				actionMap[key]();
		}
	}

	function _moveDown() {
		if (relativeTopPos < limitOfMotion)
			relativeTopPos = relativeTopPos + 1;
		document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
	}

	function _moveUp() {
		if (relativeTopPos>10)
			relativeTopPos = relativeTopPos - 1;
		document.getElementsByClassName('redDiv')[0].style.top = relativeTopPos.toString() + "px";
	}

	function _moveLeft() {
		if (relativeLeftPos > 10)
			relativeLeftPos = relativeLeftPos - 1;
		document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";

	}

	function _moveRight() {
		if (relativeLeftPos<limitOfMotion)
			relativeLeftPos = relativeLeftPos + 1;
		document.getElementsByClassName('redDiv')[0].style.left = relativeLeftPos.toString() + "px";
	}

	function _logSomething() {
		console.log("to be implemented")
	}

	function setLimitOfMotion(newLimit) {
		this.limitOfMotion = newLimit;
	}

	function getLimitOfMotion() {
		return this.limitOfMotion;
	}

}

