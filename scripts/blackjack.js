// Our deal function will return one random card
var cardArray = ["two_diamond", "three_diamond", "four_diamond", "five_diamond", "six_diamond","seven_diamond", "eight_diamond", "nine_diamond", "ten_diamond", "jack_diamond", "queen_diamond", "king_diamond", "ace_diamond",
"two_club", "three_club", "four_club", "five_club", "six_club","seven_club", "eight_club", "nine_club", "ten_club", "jack_club", "queen_club", "king_club", "ace_club",
"two_diamond", "three_diamond", "four_diamond", "five_diamond", "six_diamond","seven_diamond", "eight_diamond", "nine_diamond", "ten_diamond", "jack_diamond", "queen_diamond", "king_diamond", "ace_diamond",
"two_spade", "three_spade", "four_spade", "five_spade", "six_spade","seven_spade", "eight_spade", "nine_spade", "ten_spade", "jack_spade", "queen_spade", "king_spade", "ace_spade"];


function deal(){
    var card = cardArray[Math.floor(52*Math.random())];
    return card;
}

function draw(){
	var displayCard = "blackjackImages/"+deal()+".jpg";
}

