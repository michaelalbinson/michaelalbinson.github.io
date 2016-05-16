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
var endString = ["you've reached the END OF DEVELOPMENT", " more to come :)"]

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
			}, 1);
			if (textSelector.length-1 != stringsRun){
				interval2 = setInterval(function(){
					deleteString(textSelector[i]);
				}, 1);
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
				fadeIn("continueField");
				document.getElementsByClassName("continueField")[0].placeholder = "enter response"
				stage = 7;
				break;	
			case 7:
				document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + endString;
				break;
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
			document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "... please enter 'y' or 'n'... User this is pathetic";
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
			document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "Seriously how are you still not getting this... please enter 'y' or 'n'...";
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
			document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "Seriously how are you still not getting this... please enter 'y' or 'n'...";
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
	}
}

function handleButtonPush(){
	if (stage == 0){
		stringMaster(stringBank);
		onFadeOut("acceptButton", function(){
			document.getElementsByClassName('acceptButton')[0].value = "PUSH ME";
		});
	}
	if (stage == 4){
		stringMaster(onButtonPushDialog);
		fadeOut('acceptButton');
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