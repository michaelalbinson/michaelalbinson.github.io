window.onload = function(){
	setInterval(toggleBox, 750);
	var CM = new consciousnessManager();
}


class consciousnessManager {
	constructor(){
		this.utilityHandler = new consciousnessUtilityHandler();
	}

	stringRunnerManager(textSelector){
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

	nextStageSelector(){
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
				if (cakeFlag)
				else{
					fadeIn("continueField");
					stage = 3;
				}
				break;

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
	checkHowAnnoyedIAm(){
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
}