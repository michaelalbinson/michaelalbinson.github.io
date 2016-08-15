var daMan = new GameManager();

function GameManager() {
	this.cards = document.getElementsByClassName('rowNum');
	this.drawButton = document.getElementsByClassName('draw')[0];
	this.gameBegun = false;
	var interval = setInterval(makeSureWindowLargeEnough, 1000);
	var rowManager = null;
	var bodyHidden = false;

	this.begin = function() {
		for (card in this.cards){
			setElementToImage(card);
		}
		enableOrDisableDrawButton(false);
		rowManager = new RowManager();
		daMan.gameBegun = true;
	}

	function setElementToImage(element) {
		element.innerHTML = "";
	}

	function enableOrDisableDrawButton(enable){
		var drawButton = document.getElementsByClassName('draw')[0];
		drawButton.disabled = enable;
	}

	this.determinePosition = function(sender){
		console.log(sender);
		if (!this.gameBegun)
			return;

		var row = rowManager.getRowWithName(sender);
		if (!row){
			console.log("could not find row matching query")
			return;
		}
		var card = topCard.getCurrentCard();
		changeCardPosition(card);
	}

	function changeCardPosition(card){
		var allRows = rowManager.rows;
		var atLeastOneRowMatchesConditions = false;
		for (row in allRows){
			if (followsRules(row.getCurrentCard(), card)){
				atLeastOneRowMatchesConditions = true;
				break;
			}
		}
		if (!atLeastOneRowMatchesConditions)
			return;

		//do more here
	}

	this.draw = function() {
		console.log("draw");
	}

	function makeSureWindowLargeEnough() {
		if (window.innerWidth > 1280 && bodyHidden){
			displayGameBody(bodyHidden);
			bodyHidden = false;
			return;
		}
		else if (window.innerWidth < 1280 && !bodyHidden){
			displayGameBody(bodyHidden);
			bodyHidden = true;
		}
	}

	//Move to new class DOMManiputator or something
	function displayGameBody(display) {
		var gameBody = document.getElementsByClassName('game-body')[0];
		var warningMsg = document.getElementsByClassName('warning')[0];
		var placeholder = document.getElementsByClassName('placeholder')[0];
		if (!gameBody || !warningMsg){
			console.log('failed to get gameBody or warning body');
			return;
		}

		if (display){ 
			gameBody.style.display = "block";
			warningMsg.style.display = "none";
			placeholder.style.display = "none";
		}
		else{
			gameBody.style.display = "none";
			warningMsg.style.display = "block";
			placeholder.style.display = "block";
		}
	}
}

// possible row names r1-r6 deck and discard
function RowManager() {
	this.rows = {
		rOne: new Row('r1'),
		rTwo: new Row('r2'),
		rThree: new Row('r3'),
		rFour: new Row('r4'),
		rFive: new Row('r5'),
		rSix: new Row('r6'),
		deck: new Row('deck'),
		discard: new Row('discard'),
		rhOne: new Row('rh1'),
		rhTwo: new Row('rh2'),
		rhThree: new Row('rh3'),
		rhFour: new Row('rh4')
	};

	this.getRowWithName = function(name) {
		for (key in this.rows){
			if (key == name)
				return this.rows[key];
		}
		return "No row found";
	}
}

function Row(rowName){
	var topCard = null;
	var cardStack = null;
	var rowName = rowName;
	var stackContains = null;

	this.getCurrentCard = function() {
		return topCard;
	}

	this.getNextCard = function() {
		return cardStack;
	}

	this.checkIfStackContains = function() {

	}

	this.getRowName = function() {
		return rowName;
	}
}

function DeckManager() {
	this.deck = init();

	//shuffles the deck using the Fischer-Yates shuffle
	this.shuffle = function(deck) {
  		var m = deck.length, t, i;

  		// While there remain elements to shuffle…
  		while (m) {

    	// Pick a remaining element…
    		i = Math.floor(Math.random() * m--);

    		// And swap it with the current element.
    		t = deck[m];
    		deck[m] = deck[i];
    		deck[i] = t;
  		}
  		return deck;
	}

	//initializes the deck ordered 1-52
	function init() {
		var card = 1;
		var deck = [];
		while (card < 53){
			deck.push(card);
			card++;
		}
		return deck;
	}

	//gets the card on top of the deck and then removes it
	this.draw = function() {
		console.log(this.deck);
		var top = this.deck[0];
		console.log(top);
		this.deck.splice(0, 1);
		console.log(this.deck);
		return top;
	}
}
