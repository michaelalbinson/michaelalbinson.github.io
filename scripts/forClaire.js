var boxStatus = true;
var holder;
var interval1;
var interval2;
var masterInterval;

var continueFlag = false;
var completeFlag = false;
var intervalsSetFlag = false;

var stage = 0;
var endStageDoneFlag = false;
var cakeFlag = false;
var annoyingCounter = 0;
var stringsRun = 0;
var fastRenderSpeed = 50;
var devRenderSpeed = 1;
var oneMessageRead = false;
var timeBetweenCharRender = fastRenderSpeed;

var startupSpeak = ["hey you", "just wanted to give you a little something", "cause turns out it's expensive af to send things to Canada", "trust me I know",
	"plus this is super fast", "but I figured I'd let you have a choice", "on what exactly you'd get to read", "so I made two", "your pick :)"];
var sassySpeak = ["good choice ;)", "so I heard that it was your birthday", "oh wait sorry the day of celebration of south african land expropriation",
	"wow that's a bit of a mouthful", "but I figured that I should do something", "I hope your day is/was filled with adventures",
	"eat a shitton of cake and get shitfaced", "cause that's what I would do", "plus maybe do other things", "like appreciate your family or whatever",
	"cause they're probably like marginally important", "I totally don't wish I was there btw", "thanks for asking", "definitely don't miss you or whatever",
	"definitely don't wish I was there right now to have some birthday fun with you", "who needs celebrations anyway, amirite?", "or amirite?",
	"sitting on a boat is definitely waaaay more exciting", "(just remember you picked the sassy option here)", "so I got you a balloon", "I hope you like it",
	"I worked like ridiculously hard on it", "anyway", "enjoy the fruits of being old enough to almost be trusted by the law",
	"and I'll talk to you soon :)", "promise ~~~(*_*)~~~"];
var cuteSpeak = ["better choice", "truth be told I ran out of ideas for the other one within 5 minutes", "plus I wanted to do this one more",
	"so hey", "hope you have (had) a tremendous day", "filled with ridiculous frivolities and spending on alcohol", "I miss you", "I hope things have been going well",
	"I know we haven't been talking as much as you probably hoped", "and I feel really bad about that", "work has been kinda eating my life a little",
	"but I just want you to know that you mean an awful lot to me", "and when I say I care about you really mean it", "and when I say I miss you I really mean it",
	"hopefully soon things will slow down a little", "or bare minimum I'll get my shit together and actually have time to bug you more often", "and I can see it coming soon",
	"but regardless, soon enough we'll be back together in Kingston", "and get to have all the adventures", "and I honestly am so ready for that",
	"like it's not even funny", "like maybe a little pathetic on my end", "but like, you know", "it's your special day", "I hope you have an amazing one",
	"eat cake", "celebrate how you're not twenty yet and how scary that'll be", "and I can't wait to talk to you :)", "<3"];
var prefixString = "/Michael/:";
var postfixString = "~toClaire$";

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
				fadeIn("stage2");
				stage = 1;
				break;
			case(1):
				document.getElementsByClassName('acceptButton')[0].value = "reset to see other message (you know you wanna)";
				document.getElementsByClassName('cakeImage')[0].src = "css/images/balloon.png";
				fadeIn("acceptButton");
				fadeIn('cakeImage');
				break;
			default:
				console.log("unknown stage");
				break;
		}
	}
	endStageDoneFlag = true;
}

function pureCute(){
	stringRunnerManager(cuteSpeak);
	fadeOut("stage2");
}
function pureSass(){
	stringRunnerManager(sassySpeak);
	fadeOut("stage2");
}

function handleButtonPush(){
	if (stage == 0){
		stringRunnerManager(startupSpeak);
		document.getElementsByClassName('acceptButton')[0].style.display = "block";
		fadeOut("acceptButton");
		fadeOut('cakeImage');
	}
	else if (stage == 1){
		if (oneMessageRead){
			resetToChoices("your choice :)");
			oneMessageRead = true;
		}
		else
			resetToChoices("btw, there may or may not be something actually in the mail too... ;)");
		fadeOut("cakeImage");
		fadeOut("acceptButton");
		stage = 0;
		
	}
}


function resetToChoices(stringToDisplay){
	stage = 0;
	clearInterval(masterInterval);
	stringRunnerManager([stringToDisplay]);
}
