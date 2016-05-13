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
	"and all you can say is 'whatever'???", "fine fine fine"]
var stringsRun = 0;
var endString = ["you've reached the END OF DEVELOPMENT", " more to come :)"]

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

window.onload = function(){
	setInterval(toggleBox, 750);
}

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

function buildString(string){
	if (!continueFlag){
		if(holder == string.length+8){
			clearInterval(interval1);
			continueFlag = true;
			return;
		}
		document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + string.substring(0, holder);
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

		document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + string.substring(0, holder);
		holder--;
	}
}

function handleButtonPush(){
	stringMaster(stringBank);
	fadeOut("acceptButton");
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

function fadeIn(element){
	var opacity = 0;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	document.getElementsByClassName(element)[0].style.display = "block";
	var fader = window.setInterval(function(){
		if (opacity >= 1){
			clearInterval(fader);
		}
		else{
			opacity = opacity + .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function onFadeIn(element, doSomething){
	var opacity = 0;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	document.getElementsByClassName(element)[0].style.display = "block";
	var fader = window.setInterval(function(){
		if (opacity >= 1){
			clearInterval(fader);
			doSomething()
		}
		else{
			opacity = opacity + .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function fadeOut(element){
	var opacity = 1;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	var fader = window.setInterval(function(){
		if (opacity <= 0){
			document.getElementsByClassName(element)[0].style.display = "none";
			clearInterval(fader);
		}
		else{
			opacity = opacity - .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
}

function onFadeOut(element, doSomething){
	var opacity = 1;
	document.getElementsByClassName(element)[0].style.opacity = opacity;
	var fader = window.setInterval(function(){
		if (opacity <= 0){
			document.getElementsByClassName(element)[0].style.display = "none";
			clearInterval(fader);
			doSomething();
		}
		else{
			opacity = opacity - .01;
			document.getElementsByClassName(element)[0].style.opacity = opacity;
		}
	}, 10);
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
				break;
			case(2):
				console.log("triggered");
				if (cakeFlag){
					console.log("cakeFlag is true");
					break;
				}
				else{
					onFadeOut("stage2", function(){
						fadeIn("continueField");
					});
					document.getElementsByClassName('gameText')[1].innerHTML = "--END OF CURRENT DEVELOPMENT-- more to come :)";
					stage = 3;
					break;
				}
			case(3):
				break;
			case(4):
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
		}
		else{
			resetTextIntervals();
			document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "... please enter 'y' or 'n'... User this is pathetic";
		}
	}
	else if (stage == 3){
		if (inputElement == "surprise?" || inputElement == "s"){
			document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "you don't get to know the surprise yet ... please enter 'y' or 'n'... User this is pathetic";
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
}
