//setTimeout(function(){resizeTo(1280, 600); console.log("shrink");}, 5000); //TODO: Get this working -- figure out how to resize
var daMan = gameManager();

function begin(){
	daMan.begin();
}

function gameManager(){

	this.cards = document.getElementsByClassName('row');
	this.drawButton = document.getElementsByClassName('draw')[0];


	this.begin = function() {
		for (card in this.cards){
			setElementToImage(card);
		}
		enableOrDisableDrawButton(false);
	}

	function setElementToImage(element) {
		element.innerHTML = "";
	}

	function enableOrDisableDrawButton(enable){
		this.drawButton.disabled = enable;
	}
}