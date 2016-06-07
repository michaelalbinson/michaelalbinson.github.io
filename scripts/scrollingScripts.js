var clickedMainBox = false;
var timeoutWatcher;
var key;

function prepareGame(){
	if (!clickedMainBox){
		document.getElementsByClassName('innerTextP')[0].innerHTML = "sweeeeeet";
		document.getElementsByClassName('scrollBody')[0].style.backgroundColor = "lightblue";
		clickedMainBox = true;
	}
}

window.onkeydown = function(keydown){
	if (clickedMainBox){
		switch(keydown.keyCode){
			case 87:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "up";
				setTimeout(moveUp, 100);
				break;
			case 65:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "left";
				break;
			case 68: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "right";
				break;
			case 83: 
				document.getElementsByClassName('innerTextP')[0].innerHTML = "down";
				break;
			case 78:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "n";
				break;
			case 77:
				document.getElementsByClassName('innerTextP')[0].innerHTML = "m";
				break;
			default:
				document.getElementsByClassName('innerTextP')[0].innerHTML = keydown.keyCode;
		}
	}
}

window.onkeyup = function(){
	if (clickedMainBox){
		document.getElementsByClassName('innerTextP')[0].innerHTML = "nil";
	}
}

function moveUp(){
	document.getElementsByClassName('redDiv')[0].style.top -= 1;
}

function moveDown(){
	document.getElementsByClassName('redDiv')[0].style.top += 1;
}

function moveLeft(){
	document.getElementsByClassName('redDiv')[0].style.left -= 1;
}

function moveRight(){
	document.getElementsByClassName('redDiv')[0].style.left += 1;
}