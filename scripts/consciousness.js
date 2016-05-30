var boxStatus = true;
var holder;
var interval1;
var interval2;
var masterInterval;
var continueFlag = false;
var completeFlag = false;
var intervalsSetFlag = false;
var multiuseFlag = false;
var stage = 0;
var endStageDoneFlag = false;
var cakeFlag = false;
var annoyingCounter = 0;
var stringsRun = 0;
var branchTracker = "";
var endString = ["you've reached the END OF DEVELOPMENT", " more to come :)"];
var slowRenderSpeed = 100;
var medRenderSpeed = 75;
var fastRenderSpeed = 50;
var devRenderSpeed = 1;
var timeBetweenCharRender = medRenderSpeed;

function stringRunnerManager(textSelector){
	holder = 1;
	var i = 0;
	masterInterval = setInterval(function(){
		if (!completeFlag && continueFlag && !intervalsSetFlag){
			i++;
			completeFlag = true;
			continueFlag = false;
			intervalsSetFlag = false;
			stringsRun++;
		}
		if (!intervalsSetFlag && textSelector.length >= stringsRun){
			interval1 = setInterval(function(){
				buildString(textSelector[i]);
			}, timeBetweenCharRender);
			if (textSelector.length-1 != stringsRun){
				interval2 = setInterval(function(){
					deleteString(textSelector[i]);
				}, timeBetweenCharRender);
			}
			intervalsSetFlag = true;
		}
		if (textSelector.length-1 == stringsRun && continueFlag){
			endStageDoneFlag = false;
			nextStageSelector();
		}
	}, 500);
}

function nextStageSelector(){
	if (!endStageDoneFlag){
		resetTextIntervals();
		switch(stage){
			case(0):
				fadeIn("continueField");
				document.getElementsByClassName('acceptButton')[0].value = "PUSH ME";
				stage = 1;
				break;
			case(1):
				fadeIn("cakeImage");
				onFadeIn("stage2", function(){
					fadeOut("cakeImage");
				});
				stage = 2;
				checkHowAnnoyedIAm();
				break;
			case(2):
				console.log("triggered");
				if (cakeFlag){
					console.log("cakeFlag is true");
					break;
				}
				else{
					fadeIn("continueField");
					stage = 3;
					break;
				}
			case(3):
				fadeIn('acceptButton');
				stage = 4;
				break;
			case(4):
				fadeIn("continueField");
				stage = 5;
				break;
			case 5:
				for (var i = 1; i <= 3; i++) {
					document.getElementsByClassName('genButton')[i-1].value = "button 0" + i.toString();
				}
				fadeIn('stage2');
				stage = 6;
				break;
			case 6:
				switch(branchTracker){
					case("1"):
						setButtonsForNextStage(branch1_ButtonChoices);
						break;
					case("2"):
						setButtonsForNextStage(branch2_ButtonChoices);
						break;
					case("3"):
						setButtonsForNextStage(branch3_ButtonChoices)
						break;
				}
				fadeIn('stage2');
				stage = 7;
				break;	
			case 7:
				document.getElementsByClassName('gameText')[0].innerHTML = "~toUser$ " + endString;
				switch(branchTracker){
					case("1A"):
						setButtonsForNextStage(branch1A_ButtonChoices);
						fadeIn('stage2');
						break;
					case("1B"):
						setResetButton();
						break;
					case("1C"):
						setButtonsForNextStage(branch1C_ButtonChoices);
						fadeIn('stage2');
						break;
					case("2A"):
						setButtonsForNextStage(branch2A_ButtonChoices);
						fadeIn('stage2');
						break;
					case("2B"):
						setButtonsForNextStage(branch2B_ButtonChoices);
						fadeIn('stage2');
						break;
					case("2C"):
						
						setButtonsForNextStage(branch2C_ButtonChoices);
						fadeIn('stage2');
						break;
					case("3A"):
						setButtonsForNextStage(branch3A_ButtonChoices);
						fadeIn('stage2');
						break;
					case("3B"):
						setButtonsForNextStage(branch3B_ButtonChoices);
						fadeIn('stage2');
						break;
					case("3C"):
						setResetButton();
				}
				break;
			case 8:
				stringRunnerManager(endString);

			default:
				console.log("unknown stage");
				break;
		}
	}
	endStageDoneFlag = true;
}

function handleKeydown(inputElement){
	if (stage == 1){
		if (inputElement.value == "y" || inputElement.value == "yes"){
			stringRunnerManager(confirmStringBank);
			fadeOut("continueField");
		}
		else if (inputElement.value == "n" || inputElement.value == "no"){
			stringRunnerManager(declineStringBank);
			fadeOut("continueField");
			annoyingCounter = 1;
		}
		else{
			resetTextIntervals();
			document.getElementsByClassName('gameText')[0].innerHTML = "/Master/: ~toUser$ " + "... please enter 'y' or 'n'... User this is pathetic";
		}
	}
	else if (stage == 3){
		if (inputElement.value == "y" || inputElement.value == "yes"){
			fadeOut("continueField");
			checkHowAnnoyedIAm();
		}
		else if(inputElement.value == "n" || inputElement.value == "no"){
			fadeOut("continueField");
			annoyingCounter++;
			checkHowAnnoyedIAm();
		}
		else{
			resetTextIntervals();
			document.getElementsByClassName('gameText')[0].innerHTML = "/Master/: ~toUser$ " + "Seriously how are you still not getting this... please enter 'y' or 'n'...";
		}
	}
	else if (stage == 5){
		if (inputElement.value == "y" || inputElement.value == "yes"){
			fadeOut("continueField");
			stringRunnerManager(stage5PositiveDialog);
		}
		else if(inputElement.value == "n" || inputElement.value == "no"){
			fadeOut("continueField");
			annoyingCounter++;
			stringRunnerManager(stage5AnnoyedDialog);
		}
		else{
			resetTextIntervals();
			document.getElementsByClassName('gameText')[0].innerHTML = "/Master/: ~toUser$ " + "Seriously how are you still not getting this... please enter 'y' or 'n'...";
		}
	}
	document.getElementsByClassName("continueField")[0].value = "";
}

function discussSurprise(){
	if (stage == 2) {
		cakeFlag = true;
		stringRunnerManager(surpriseDialog);
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringRunnerManager(button1Dialog);
		branchTracker = "1";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringRunnerManager(storyBranch1A);
				break;
			case("2"):
				stringRunnerManager(storyBranch2A);
				break;
			case("3"):
				stringRunnerManager(storyBranch3A);
				break;
		}
		fadeOut("stage2");
		branchTracker += "A";
	}
}
function discussCake(){
	if (stage == 2) {
		cakeFlag = true;
		stringRunnerManager(cakeDialog);
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringRunnerManager(button3Dialog);
		branchTracker = "3";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringRunnerManager(storyBranch1C);
				break;
			case("2"):
				stringRunnerManager(storyBranch2C);
				break;
			case("3"):
				stringRunnerManager(storyBranch3C);
				break;
		}
		fadeOut("stage2");
		branchTracker += "C";
	}
}
function discussWhatever(){
	if (stage == 2) {
		cakeFlag = false;
		stringRunnerManager(stage2Dialog);
		onFadeOut("stage2");
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringRunnerManager(button2Dialog);
		branchTracker = "2";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringRunnerManager(storyBranch1B);
				break;
			case("2"):
				stringRunnerManager(storyBranch2B);
				break;
			case("3"):
				stringRunnerManager(storyBranch3B);
				break;
		}
		fadeOut("stage2");
		branchTracker += "B";
	}
}

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

function checkHowAnnoyedIAm(){
	switch(stage){
		case 2:
			if (annoyingCounter == 0){
				stage2Dialog.push("I know you'll love it");
			}
			else{
				stage2Dialog.push("... probably not for you, but definitely for me");
			}
			break;
		case 3:
			if (annoyingCounter == 0){
				stringRunnerManager(stage3PositiveDialog);
			}
			else if (annoyingCounter == 1){
				stage3PositiveDialog[2] = "because you've been (mostly) agreeable for this long";
				stage3PositiveDialog.push("(You probably won't even enjoy pressing it)");	
				stringRunnerManager(stage3PositiveDialog);
			}
			else{
				stringRunnerManager(stage3NegativeDialog);
			}
			break;
		case 5:
			if (annoyingCounter == 0){
				
			}
			else if (annoyingCounter == 1){

			}
			else{
			}
			break;
		default:
			break;
	}
}

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

function setResetButton(){
	document.getElementsByClassName('acceptButton')[0].value = "reset";
	fadeIn("acceptButton");
}

window.onload = function(){
	setInterval(toggleBox, 750);
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