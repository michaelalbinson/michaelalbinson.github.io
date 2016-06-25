function messageManager() {
	// variables
	this.messageDisplayed = false;
	this.messageArrayComplete = false;
	this.currentWindowSize = 250;
	this.messageIntervalWatcher;

	// functions
	this.checkForMessageEvent = checkForMessageEvent;
	this.displayMessages = displayMessages;
	this.hideMessage = hideMessage;
	this.checkPositionForMessage = checkPositionForMessage;


	function checkForMessageEvent(){
		message = checkPositionForMessage();
		displayMessages(message);

	}

	function displayMessages(message){
		if (messageDisplayed)
			return;

		var i = 0;;

		messageDisplayed = true;
		messageIntervalWatcher = setInterval(function(){
			scrollBody = document.getElementsByClassName('messageDiv')[0];
			scrollBody.style.display = "inline-block";
			scrollBody.innerHTML = message[i];
			if (i >= message.length-1){
				clearInterval(messageIntervalWatcher)
				setTimeout(hideMessage, 1000)
				return;
			}
			i++;
		}, 1000);	
	}

	function hideMessage() {
		scrollBody = document.getElementsByClassName('messageDiv')[0].style.display = "none";
		messageDisplayed = false;
	}

	// stub
	function checkPositionForMessage(){
		return ["I built this message array", "to practice using", "longer strings that are very interesting"];
	}
}