function handleButtonPush(){
	if (stage == 0){
		stringRunnerManager(stringBank);
		document.getElementsByClassName('acceptButton')[0].style.display = "block";
		fadeOut("acceptButton");
	}
	if (stage == 4){
		stringRunnerManager(onButtonPushDialog);
		fadeOut('acceptButton');
	}
	if (stage >= 7){
		stringRunnerManager(stringBank);
		fadeOut("acceptButton");
		stage = 0;
	}
}

// preference window functions
function skipToStorySelection(){
	fadeOut('skipButton');
	fadeOut('acceptButton');
	stage = 5;
	stringRunnerManager(stage5PositiveDialog);
}

function changeTextSpeed(speed){
	switch(speed){
		case ("fast"):
			timeBetweenCharRender = fastRenderSpeed;
			break;
		case ("medium"):
			timeBetweenCharRender = medRenderSpeed;
			break;
		case ("slow"):
			timeBetweenCharRender = slowRenderSpeed;
			break;
		case("dev"):
			timeBetweenCharRender = devRenderSpeed;
			break;
		default:
			console.log("uncaught speeed change");
			break;
	}
}


function resetToBeginning(){
	stage = 0;
	clearInterval(masterInterval);
	stringRunnerManager(stringBank);
}

function backOneStage(){
	stage--;
	clearInterval(masterInterval);
	previousDialog
}

function setButtonsForNextStage(buttonLabels){
	for (var i = 0; i < 3; i++) {
		if (buttonLabels[i] == "-")
			document.getElementsByClassName('genButton')[i].disabled == "true";
		else
			document.getElementsByClassName('genButton')[i].disabled == "false";

		document.getElementsByClassName('genButton')[i].value = buttonLabels[i];
	}
}
//end preference window functions 


function setResetButton(){
	document.getElementsByClassName('acceptButton')[0].value = "reset";
	fadeIn("acceptButton");
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

function buildString(string){
	if (!continueFlag){
		if(holder == string.length+8){
			clearInterval(interval1);
			continueFlag = true;
			return;
		}
		document.getElementsByClassName('gameText')[0].innerHTML = prefixString + " " + postfixString + " "  + string.substring(0, holder);
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

		document.getElementsByClassName('gameText')[0].innerHTML = prefixString + " " + postfixString + " " + string.substring(0, holder);
		holder--;
	}
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

function fadeInThree(field1, field2, field3){
	fadeIn(field1);
	setTimeout(function(){
		fadeIn(field2);
	}, 250);
	setTimeout(function(){
		fadeIn(field3);
	}, 500)
}