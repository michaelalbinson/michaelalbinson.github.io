var daMan = new GameManager();

function GameManager() {
	this.gameBegun = false;
	var domMan = new SolitaireDOMManipulator();
	var preferences = new SolitairePreferenceManager();
	var interval = setInterval(makeSureWindowLargeEnough, 500);
	var rowManager = null;

	this.begin = function() { //on every reset we must create a new RowManager i.e. deck and DOM reset
		rowManager = new RowManager();
		domMan.enableOrDisableDrawButton(false);
		daMan.gameBegun = true;
	}

	function makeSureWindowLargeEnough(){
		domMan.makeSureWindowLargeEnough();
	}

	function setElementToImage(element) {
		element.innerHTML = "";
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

	this.newWindow = function(){
		window.open("./solitaire.html", "", "width=1280, height=700")
	}

	this.editPreference = function(preference, to) {
		preferences.setPreference(preference, to);
	}
}

// possible row names r1-r6 deck and discard
function RowManager(gameType) {
	this.deck = new Deck();
	this.rows = 

	this.getRowWithName = function(name) {
		for (key in this.rows){
			if (key == name)
				return this.rows[key];
		}
		return "No row found";
	}

	function populateRows(){
		if (this.gameType == '6card'){
			return {
				rOne: new Row('r1', this.deck, 1),
				rTwo: new Row('r2', this.deck, 2),
				rThree: new Row('r3', this.deck, 3),
				rFour: new Row('r4', this.deck, 4),
				rFive: new Row('r5', this.deck, 5),
				rSix: new Row('r6', this.deck, 6),
				deck: new Row('deck', this.deck),
				discard: new Row('discard', this.deck),
				rhOne: new Row('rh1', this.deck),
				rhTwo: new Row('rh2', this.deck),
				rhThree: new Row('rh3', this.deck),
				rhFour: new Row('rh4', this.deck)
			};
		}
		else {
			return {
				rOne: new Row('r1', this.deck, 1),
				rTwo: new Row('r2', this.deck, 2),
				rThree: new Row('r3', this.deck, 3),
				rFour: new Row('r4', this.deck, 4),
				rFive: new Row('r5', this.deck, 5),
				rSix: new Row('r6', this.deck, 6),
				rSeven: new Row('r7', this.deck, 7),
				deck: new Row('deck', this.deck),
				discard: new Row('discard', this.deck),
				rhOne: new Row('rh1', this.deck),
				rhTwo: new Row('rh2', this.deck),
				rhThree: new Row('rh3', this.deck),
				rhFour: new Row('rh4', this.deck)
			};
		}
	}
}

function Row(rowName, deckObj, cardsToStartWith){
	var topCard = null;
	var cardStack = null;
	var rowName = rowName;
	var stack = [];
	var deck = deckObj;

	getCardsAndAddToStack(cardsToStartWith);

	this.getCurrentCard = function() {
		return topCard;
	}

	this.getNextCard = function() {
		return cardStack;
	}

	this.checkIfStackContains = function(card) {
		return stack.contains(card);
	}

	this.getRowName = function() {
		return rowName;
	}

	this.pushStack = function(numberToDraw) {
		var i = 0;
		while(i >= numberToDraw){
			stack.push(deck.draw());
		}
	}

	function getCardsAndAddToStack(numberToAddToStack){
		var i = 0;
		while (i<numberToAddToStack){
			stack.push(deck.draw());
			i++;
		}
	}
}

function Deck() {
	this.cards = init();

	//shuffles the deck using the Fischer-Yates shuffle
	this.shuffle = function() {
		var m = this.cards.length, t, i;

		if(!this.cards[0]){
			console.log("nothing to shiffle");
			return;
		}

  		// While there remain elements to shuffle…
  		while (m) {
    		// Pick a remaining element…
    		i = Math.floor(Math.random() * m--);
    		// And swap it with the current element.
    		t = this.cards[m];
    		this.cards[m] = this.cards[i];
    		this.cards[i] = t;
    	}
    	console.log("shuffled");
    }

	//initializes the deck ordered 1-52
	function init() {
		var card = 1;
		var deck = [];
		while (card < 53){
			deck.push(new Card(card));
			card++;
		}
		return deck;
	}

	//gets the card on top of the deck and then removes it
	this.draw = function() {
		var top = this.cards[0];
		if (!top){
			console.log("deck empty");
			return;
		}
		this.cards.splice(0, 1);
		return top;
	}
}

function SolitaireDOMManipulator() {
	var drawButton = document.getElementsByClassName('draw')[0];
	var gameBody = document.getElementsByClassName('game-body')[0];
	var warningMsg = document.getElementsByClassName('warning')[0];
	var placeholder = document.getElementsByClassName('placeholder')[0];
	var bodyHidden = true;

	this.enableOrDisableDrawButton = function(enable){
		drawButton.disabled = enable;
	}

	this.makeSureWindowLargeEnough = function() {
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

	function displayGameBody(display) {
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

/*
function DOMManipulator() {
	// retuns the first element found by class
	this.getElementByClass = function(element){
		var e = document.getElementsByClassName(element)[0];
		if (e)
			return e;
		else
			console.log("element by class name " + element + " not found");
	}

	// returns the first element found by id
	this.getElementByID = function(element){
		var e = document.getElementByID(element)[0];
		if (e)
			return e;
		else
			console.log("element with ID " + element + " not found");
	}
}
*/

//rawNumber must be from 1-52
function Card(rawNumber) {
	var rawNumber = rawNumber;
	var suit;
	var number;
	var color;
	var cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	var suits = ['heart', 'spade', 'diamond', 'club'];
	var colors = ['red', 'black'];

	determineSuitColorAndNumber(rawNumber);

	this.getSuit = function() {
		return suit;
	}

	this.getNumber = function() {
		return number;
	}

	this.getColor = function() {
		return color;
	}

	function determineSuitColorAndNumber(rawNumber){
		if (rawNumber < 14) //1-13
			setSuitAndNumber(rawNumber, 0, 0);
		else if (rawNumber >= 14 && rawNumber < 27) //14-26
			setSuitAndNumber(rawNumber-14, 1, 1);
		else if (rawNumber >= 27 && rawNumber < 40) //27-39
			setSuitAndNumber(rawNumber-28, 2, 0);
		else //40-52
			setSuitAndNumber(rawNumber-39, 3, 1);
	}

	function setSuitAndNumber(cardNumber, suitNo, colorNo){
		suit = suits[suitNo];
		number = cardNames[cardNumber-1]; //translate to 0-12 from 1-13
		color = colors[colorNo];
	}
}

//ensures that when a card change is requested a card goes where it is supposed to go etc
function SolitaireRuleManager() {
	var cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	var colors = ['black', 'red'];

}

function SolitairePreferenceManager() {
	var sixOrSevenRow = '6row'; //alt '7row'
	var oneOrThreeCardDraw = '3card'; //alt '1card'

	this.setPreference = function(pref, to) {
		switch(pref) {
			case ('numOfRows'): //add cases as we go
				sixOrSevenCard = to;
				changeDOMToHave(to);
				break;
			case ('cardDraw'):
				oneOrThreeCardDraw = to;
				break;
			default:
				throw new Error("Selected preference not found");
		}
	}

	this.getPreference = function(pref) {
		switch(pref) {
			case ('numOfRows'): //add cases as we go
				return sixOrSevenCard;
				break;
			case ('cardDraw'):
				return oneOrThreeCardDraw;
				break;
			default:
				throw new Error("Selected preference not found");
		}
	}

}
