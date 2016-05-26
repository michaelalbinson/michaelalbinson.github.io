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
var timeBetweenCharRender = slowRenderSpeed;

function stringMaster(textSelector){
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
						setButtonsForNextStage(branch1ButtonChoices);
						break;
					case("2"):
						setButtonsForNextStage(branch2ButtonChoices);
						break;
					case("3"):
						setButtonsForNextStage(branch3ButtonChoices)
						break;
				}
				fadeIn('stage2');
				stage = 7;
				break;	
			case 7:
				document.getElementsByClassName('gameText')[0].innerHTML = "~toUser$ " + endString;
				switch(branchTracker){
					case("1A"):
						setButtonsForNextStage(branch1AButtonChoices);
						fadeIn('stage2');
						break;
					case("1B"):
						setResetButton();
						break;
					case("1C"):
						setButtonsForNextStage(branch1CButtonChoices);
						fadeIn('stage2');
						break;
					case("2A"):
						setButtonsForNextStage(branch2AButtonChoices);
						fadeIn('stage2');
						break;
					case("2B"):
						setButtonsForNextStage(branch2BButtonChoices);
						fadeIn('stage2');
						break;
					case("2C"):
						
						setButtonsForNextStage(branch2CButtonChoices);
						fadeIn('stage2');
						break;
					case("3A"):
						setButtonsForNextStage(branch3AButtonChoices);
						fadeIn('stage2');
						break;
					case("3B"):
						setButtonsForNextStage(branch3BButtonChoices);
						fadeIn('stage2');
						break;
					case("3C"):
						setResetButton();
				}
				break;
			case 8:
				stringMaster(endString);

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
			stringMaster(confirmStringBank);
			fadeOut("continueField");
		}
		else if (inputElement.value == "n" || inputElement.value == "no"){
			stringMaster(declineStringBank);
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
			stringMaster(stage5PositiveDialog);
		}
		else if(inputElement.value == "n" || inputElement.value == "no"){
			fadeOut("continueField");
			annoyingCounter++;
			stringMaster(stage5AnnoyedDialog);
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
		stringMaster(surpriseDialog);
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringMaster(button1Dialog);
		branchTracker = "1";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringMaster(storyBranch1A);
				break;
			case("2"):
				stringMaster(storyBranch2A);
				break;
			case("3"):
				stringMaster(storyBranch3A);
				break;
		}
		fadeOut("stage2");
		branchTracker += "A";
	}
}
function discussCake(){
	if (stage == 2) {
		cakeFlag = true;
		stringMaster(cakeDialog);
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringMaster(button3Dialog);
		branchTracker = "3";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringMaster(storyBranch1C);
				break;
			case("2"):
				stringMaster(storyBranch2C);
				break;
			case("3"):
				stringMaster(storyBranch3C);
				break;
		}
		fadeOut("stage2");
		branchTracker += "C";
	}
}
function discussWhatever(){
	if (stage == 2) {
		cakeFlag = false;
		stringMaster(stage2Dialog);
		onFadeOut("stage2");
	}
	if (stage == 6) {
		fadeOut("stage2");
		stringMaster(button2Dialog);
		branchTracker = "2";
	}
	if (stage == 7){
		switch(branchTracker){
			case("1"):
				stringMaster(storyBranch1B);
				break;
			case("2"):
				stringMaster(storyBranch2B);
				break;
			case("3"):
				stringMaster(storyBranch3B);
				break;
		}
		fadeOut("stage2");
		branchTracker += "B";
	}
}

function handleButtonPush(){
	if (stage == 0){
		stringMaster(stringBank);
		document.getElementsByClassName('acceptButton')[0].style.display = "block";
		fadeOut("acceptButton");
	}
	if (stage == 4){
		stringMaster(onButtonPushDialog);
		fadeOut('acceptButton');
	}
	if (stage == 7){
		stringMaster(stringBank);
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
				stringMaster(stage3PositiveDialog);
			}
			else if (annoyingCounter == 1){
				stage3PositiveDialog[2] = "because you've been (mostly) agreeable for this long";
				stage3PositiveDialog.push("(You probably won't even enjoy pressing it)");	
				stringMaster(stage3PositiveDialog);
			}
			else{
				stringMaster(stage3NegativeDialog);
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
	stringMaster(onButtonPushDialog);
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