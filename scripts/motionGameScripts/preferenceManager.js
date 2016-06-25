function preferenceManager() {
	// variables
	this.slowTextSpeed = 100;
	this.medTextSpeed = 75;
	this.fastTextSpeed = 50;
	this.devTextSpeed = 1;
	this.textSpeed = medTextSpeed;

	// functions
	this.changeWindowSize = changeWindowSize;
	this.changeTextSpeed = changeTextSpeed;
	this.changeWindowSizeTo = changeWindowSizeTo;
	this.fadeMenuIn = fadeMenuIn;
	this.fadeMenuOut = fadeMenuOut;

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
}