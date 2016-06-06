var dealerHiddenCard = 0;
var dealerCard1Value = 0;
var userScore = 0;

function begin(){
	var centers = document.getElementsByClassName('centerImage');
	document.getElementById('playButton').value = "Reset";
	for (i=0; i<centers.length; i++){
		centers[i].src = "css/images/flag.png";
	}
	resetAll();
	document.getElementById('dealButton').disabled = false;
}

function cardSort(cardNumber){
	var cardSuit = "I dunno";
	if (cardNumber <= 13){
		cardSuit = "Hearts";
	}
	else if (cardNumber > 13 && cardNumber <= 26){
		cardSuit = "Clubs";
		cardNumber = cardNumber - 13;
	}
	else if (cardNumber > 26 && cardNumber <= 39){
		cardSuit = "Diamonds";
		cardNumber = cardNumber - 26;
	}
	else{
		cardSuit = "Spades";
		cardNumber = cardNumber - 39;
	}

	return [cardNumber, cardSuit]
}

function cardType(cardNumber){
	var type = cardNumber;
	switch(cardNumber){
		case 1:
			type = "A"
			break;
		case 11:
			type = "J"
			break;
		case 12:
			type = "Q"
			break;
		case 13:
			type = "K"
			break;
		default:
			type = cardNumber.toString();
			break;
	}
	return type;
}

function draw(){
	var randCard = Math.floor(51*Math.random())+1;
	var card = cardSort(randCard);
	var cardNumber = card[0];
	var cardFaceNumber = cardType(cardNumber);
	var cardValue = cardNumber;
	var cardSuit = card[1]; 
    if (cardNumber > 10){ //face card
    	cardValue = 10;
    }
    else if (cardNumber == 1){ //ace
    	cardValue = 11; 
    }
    else{
    	cardValue = cardNumber;
    }
    
    return [cardFaceNumber, cardSuit, cardValue];
}

function assignSuitImage(elementToAssign, cardSuit){
	switch(cardSuit){
		case "Hearts":
			document.getElementById(elementToAssign).src = "http://www.pd4pic.com/images/heart-symbol-card-shape-game-playing-shapes-play.png";
		break;

		case "Spades":
			document.getElementById(elementToAssign).src = "http://static1.squarespace.com/static/54a38a60e4b0f4be674363b5/54ebad31e4b0ffad52bb4a7e/56176489e4b0d626a8729fec/1444374187756/squarespace+logo+2.png?format=775w";
		break;

		case "Diamonds":
			document.getElementById(elementToAssign).src = "https://pixabay.com/static/uploads/photo/2012/05/07/18/37/suit-48941_960_720.png";
		break;

		case "Clubs":
			document.getElementById(elementToAssign).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/2000px-SuitClubs.svg.png";
		break;

		default:
		console.log("err");
		console.log(cardSuit);
	}
}

function deal(){
	var card1 = draw();
	var card2 = draw();
	var card3 = draw();
	var card4 = draw();

	card2 = checkCards(card1, card2);
	card4 = checkCards(card3, card4);
	dealerCard1Value = card3[2];

	enableButtons();
	document.getElementById('dealButton').disabled = true;

	document.getElementById('player_card2_slot1').innerHTML = card1[0];
	document.getElementById('player_card2_slot2').innerHTML = card1[0];
	document.getElementById('player_card1_slot1').innerHTML = card2[0];
	document.getElementById('player_card1_slot2').innerHTML = card2[0];
	document.getElementById('card1_slot1_dealer').innerHTML = card3[0];
	document.getElementById('card1_slot2_dealer').innerHTML = card3[0];
	dealerHiddenCard = card4;

	assignSuitImage('dealerCenter1', card3[1]);
	document.getElementById('dealerCenter2').src = "http://www.iconsdb.com/icons/preview/black/question-mark-xxl.png";

	assignSuitImage('playerCenter1', card1[1]);
	assignSuitImage('playerCenter2', card2[1]);
	userScore = parseInt(card1[2]) + parseInt(card2[2]);
	var printThis = "Score: " + userScore.toString();
	var dealerScore = parseInt(card3[2]) + parseInt(card4[2]);
	if (userScore == 21 && dealerScore != 21){
		document.getElementById('resultBox').value = "Blackjack!";
		dealerFlip();
		winOrLose();
	}
	else if (userScore == 21 && dealerScore == 21){
		document.getElementById('resultBox').value = "Dealer Blackjack!";
		dealerFlip();
	}
	else{
		document.getElementById('resultBox').value = printThis;
	}

}

function resetAll(){
	var uppers = document.getElementsByClassName('cardUpper');
	var lowers = document.getElementsByClassName('cardLower');
	document.getElementById('resultBox').value = "New Game";
	for (i=0; i<uppers.length; i++){
		uppers[i].innerHTML = "";
		lowers[i].innerHTML = "";
	}
}

function hit(){
	var newCard = draw();
	if (document.getElementById('player_card3_slot1').innerHTML == ""){
		document.getElementById('player_card3_slot1').innerHTML = newCard[0];
		document.getElementById('player_card3_slot2').innerHTML = newCard[0];
		assignSuitImage('playerCenter3', newCard[1]);
		userScore = userScore + parseInt(newCard[2]);
		var printThis = "Score: " + userScore.toString();
		checkUserScore(userScore);
	}
	else if (document.getElementById('player_card4_slot1').innerHTML == "") {
		document.getElementById('player_card4_slot1').innerHTML = newCard[0];
		document.getElementById('player_card4_slot2').innerHTML = newCard[0];
		assignSuitImage('playerCenter4', newCard[1]);
		userScore = userScore + parseInt(newCard[2]);
		var printThis = "Score: " + userScore.toString();
		checkUserScore(userScore);
	}
	else{
		document.getElementById('player_card5_slot1').innerHTML = newCard[0];
		document.getElementById('player_card5_slot2').innerHTML = newCard[0];
		assignSuitImage('playerCenter5', newCard[1]);
		userScore = userScore + parseInt(newCard[2]);
		checkUserScore(userScore);
	}
}

function winOrLose(){
	document.getElementById('dealButton').disabled = true;
	document.getElementById('hitButton').disabled = true;
	document.getElementById('stayButton').disabled = true;
}

function enableButtons(){
	document.getElementById('hitButton').disabled = false;
	document.getElementById('stayButton').disabled = false;
}

function checkWinner(dealerScore){
	if (dealerScore > 21){
		document.getElementById('resultBox').value = "Dealer Busts";
	}
	else if (dealerScore == 21){
		document.getElementById('resultBox').value = "Dealer 21";
	}
	else{
		if (dealerScore < userScore) {
			document.getElementById('resultBox').value = "You Win";
		}
		else{
			document.getElementById('resultBox').value = "Dealer Wins";
		}
	}
}	

function dealerDraw(){
	assignSuitImage('dealerCenter2', dealerHiddenCard[1]);
	document.getElementById('card2_slot1_dealer').innerHTML = dealerHiddenCard[0];
	document.getElementById('card2_slot2_dealer').innerHTML = dealerHiddenCard[0];
	var dealerScore = dealerCard1Value + dealerHiddenCard[2];
	if (dealerScore < 18){
		var dealerCard3 = draw();
		assignSuitImage('dealerCenter3', dealerCard3[1]);
		document.getElementById('card3_slot1_dealer').innerHTML = dealerCard3[0];
		document.getElementById('card3_slot2_dealer').innerHTML = dealerCard3[0];
		dealerScore = dealerScore + dealerCard3[2];
		if (dealerScore < 18){
			var dealerCard4 = draw();
			assignSuitImage('dealerCenter4', dealerCard4[1]);
			document.getElementById('card4_slot1_dealer').innerHTML = dealerCard4[0];
			document.getElementById('card4_slot2_dealer').innerHTML = dealerCard4[0];
			dealerScore = dealerScore + dealerCard4[2];
			if (dealerScore < 18){
				var dealerCard5 = draw();
				assignSuitImage('dealerCenter5', dealerCard5[1]);
				document.getElementById('card5_slot1_dealer').innerHTML = dealerCard5[0];
				document.getElementById('card5_slot2_dealer').innerHTML = dealerCard5[0];
				dealerScore = dealerScore + dealerCard5[2];
			}
		}
	}
	console.log(dealerScore);
	checkWinner(dealerScore);
	winOrLose();
}

function checkUserScore(userScore){
	var printThis = "Score: " + userScore.toString();
	if (userScore == 21){
		document.getElementById('resultBox').value = "User 21";
		winOrLose();
	}
	else if (userScore > 21){
		document.getElementById('resultBox').value = "User Busts";
		winOrLose();
	}
	else{
		document.getElementById('resultBox').value = printThis;
	}
}

function dealerFlip(){
	assignSuitImage('dealerCenter2', dealerHiddenCard[1]);
	document.getElementById('card2_slot1_dealer').innerHTML = dealerHiddenCard[0];
	document.getElementById('card2_slot2_dealer').innerHTML = dealerHiddenCard[0];
}

function checkCards(card1, card2){ //ensure that you can't pull two aces as that puts you at 22
	var card = 0;
	if (card1[0] == "A" && card2[0] == "A"){
		card = card2;
		while (card[0] == "A"){
			card = draw();
		}
		card2 = card;
		return card2;
	}
	else
	{
		return card2;
	}
}

