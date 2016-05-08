function begin(){
	var centers = document.getElementsByClassName('centerImage');
	document.getElementById('playButton').value = "Reset";
	for (i=0; i<centers.length; i++){
		centers[i].src = "http://images.clipartpanda.com/smiley-face-clip-art-black-and-white-018721-glossy-black-icon-symbols-shapes-smiley-face1.png";
	}
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
    	cardValue = 1; 
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
	card1 = draw();
	card2 = draw();
	card3 = draw();


	document.getElementById('player_card2_slot1').innerHTML = card1[0];
	document.getElementById('player_card2_slot2').innerHTML = card1[0];
	document.getElementById('player_card1_slot1').innerHTML = card2[0];
	document.getElementById('player_card1_slot2').innerHTML = card2[0];
	document.getElementById('card1_slot1_dealer').innerHTML = card3[0];
	document.getElementById('card1_slot2_dealer').innerHTML = card3[0];

	assignSuitImage('dealerCenter1', card3[1]);
	document.getElementById('dealerCenter2').src = "http://www.free-icons-download.net/images/hourglass-symbol-icon-88852.png";

	assignSuitImage('playerCenter1', card1[1]);
	assignSuitImage('playerCenter2', card2[1]);
	var number = parseInt(card1[2]) + parseInt(card2[2]);
	var printThis = "Score: " + number.toString();
	
	document.getElementById('resultBox').value = printThis;

}
/*
function hitOnce(){

}

function hitTwice(){

}

function hitThrice{

}
*/




