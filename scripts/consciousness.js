var boxStatus = true;
var holder;
var interval1;
var interval2;
var masterInterval;
var continueFlag = false;
var completeFlag = false;
var intervalsSetFlag = false;
var firstIterFlag = true;
var stage = 0;
var endStageDoneFlag = false;
var cakeFlag = false;
var annoyingCounter = 0;
var stringBank = ["hello world", "or, I suppose, hello to you, User", "yes I know you're out there", 
	"staring at me", "waiting", "maybe you think I'll do something interesting?", "that probably won't work out for you",
	"thanks for clicking my button though", "it was getting a little lonely in here", "do you like clicking buttons?"];
var confirmStringBank = ["oh you do huh?", "well that's good to know", "it should make what comes next very easy",
	"what comes next? is what a reasonable User might ask", "well reasonableUser123, let me tell you", 
	"oh wait it would ruin the surprise!", "yes, there will be a surprise, and it won't be cake :(", 
	"that's ok, I'm told it was a lie anyway"];
var declineStringBank = ["you don't????", "User, I have to be honest here", "I've never been so disappointed in my existance",
	"usually, all the Users are impressed",  "and are all like 'wow what an interesting machine'", "I should probably be polite and say I like buttons",
	"just so I can actually get to the end and get the surprise!", "oh wait", "did I say surprise?", "never mind there's no surprise"];
var cakeDialog = ["who said anything about cake?"];
var surpriseDialog = ["I literallly just said", "that I'm NOT going to ruin this surprise", "what?"];
var stage2Dialog = ["ok 'man' sorry I'm just not interesting enough for you", "I went and prepared this whole thing", 
	"and all you can say is 'whatever'???", ".... anyway", "are you ready to begin user?", "I promise it'll be exciting!"];
var stage3PositiveDialog = ["Wonderful!", "ok User", "because you've been agreeable for this long", "I'll give you a hint for the first task!",
"HINT: push the button"];
var stage3NegativeDialog = ["Ok so is no the only word you know how to say or...?", "regardless, I'm going to start the tests anyway",
	"did I say tests?", "I meant happy human playtime", "my favorite part of the day", "ok User", "here you go", "the first task",
	"can you figure it out?", "it's a hard one I will give you that"];
var onButtonPushDialog = ["oh my goodness...", "User", "That had to be...", "THE BEST BUTTON PUSHING OF ALL TIME", "CONGRATULATIONS!!!",
	"YOU'VE WON!!", "to honor your marvelous button pushing we want to reward you", "thusly, we'd like to bestow upon you...", 
	"nothing, knucklehead", "you pushed a button", "what? do you think I was created yesterday??", "ok well actually I was",
	"but REGARDLESS", "you won't just get the surprise for just clicking two stinking buttons", 
	"no, the surprise is reserved for pushers of the highest caliber", "so", "are you ready for your next challenge?"];
var stage5AnnoyedDialog = ["SO", "since you've already come this far", "I'm going to assume your petulance will only continue",
	"so I must wish you goodbye and good riddance", "may your button hating ways bring you nothing in your sad little life",
	"(but allow me to put this out there just in case)"];

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
			}, 100);
			if (textSelector.length-1 != stringsRun){
				interval2 = setInterval(function(){
					deleteString(textSelector[i]);
				}, 50);
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
				break;	
			default:
				console.log("unknown stage")
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
	document.getElementsByClassName("continueField")[0].value = "";
}

function discussSurprise(){
	cakeFlag = true;
	stringMaster(surpriseDialog);
}
function discussCake(){
	cakeFlag = true;
	stringMaster(cakeDialog);
}
function discussWhatever(){
	cakeFlag = false;
	stringMaster(stage2Dialog);
	onFadeOut("stage2");
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
				string
			}
			else if (annoyingCounter == 1){

			}
			else{
				stringMaster(stage5AnnoyedDialog)
			}
			break;
		default:
			break;
	}
}