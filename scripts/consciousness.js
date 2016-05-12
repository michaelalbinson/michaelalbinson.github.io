var boxStatus = true;
var holder;
var interval1;
var interval2;
var masterInterval;
var continueFlag = false;
var completeFlag = false;
var intervalsSetFlag = false;
var stringBank = ["hello world", "or, I suppose, hello to you, User", "yes I know you're out there", 
"staring at me", "waiting", "maybe you think I'll do something interesting?", "that probably won't work out for you",
"thanks for clicking my button", "it was getting a little lonely in here", "do you like clicking buttons?",
"continueField"];
var confirmStringBank = ["oh you do huh?"];
var declineStringBank = [];
var stringsRun = 0;

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

function changeText(textSelector){
	document.getElementsByClassName('acceptButton')[0].style.display = "none";
	holder = 1;
	var i = 0;
	masterInterval = setInterval(function(){
		if (!completeFlag && continueFlag && !intervalsSetFlag){
			i++;
			completeFlag = true;
			continueFlag = false;
			intervalsSetFlag = false;
			stringsRun++;
			console.log("flags reset");
		}
		if (!intervalsSetFlag && textSelector.length >= stringsRun){
			interval1 = setInterval(function(){
				buildString(textSelector[i]);
			}, 250);
				if (textSelector.length-2 != stringsRun){
				interval2 = setInterval(function(){
					deleteString(textSelector[i]);
				}, 100);
			}
			console.log("reset intervals")
			intervalsSetFlag = true;
		}
		console.log("nothing to be done")
		console.log(i);
		if (textSelector.length-2 == stringsRun){
			console.log("complete");
			clearInterval(masterInterval);
			var selector = textSelector[textSelector.length-1];
			document.getElementsByClassName(selector)[0].style.display = "block";
		}
	}, 500);


}

function buildString(string){
	if (!continueFlag){
		if(holder == string.length+6){
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

function handleKeydown(inputElement){
	if (inputElement.value == "y" || inputElement.value == "yes"){
		document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "oh you do huh?";
		console.log("yes");
	}
	else if (inputElement.value == "n" || inputElement.value == "no"){
		document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "you don't?????!?!?!?";
		console.log("no");
	}
	else{
		inputElement.value = " ";
		document.getElementsByClassName('gameText')[1].innerHTML = "~toUser$ " + "... please enter 'y' or 'n'... User this is pathetic";
	}
}