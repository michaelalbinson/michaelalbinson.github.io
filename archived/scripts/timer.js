"use strict"

var headers = ["Hey, guess what? I love you", "Guess how many days left :)))", "&hearts;", "Hi. Hi. Hey. Hey you. Guess what? Chickenbutt ;)",
			"I missssss youuuuu", ":P", "Hey guess where I wanna be right now? Oh yeah, that's right, with you", "I love you",
			"I wanna cuddle with you right now", "I wanna kiss you all over ;)"];
var newHeader = headers[Math.floor(Math.random()*headers.length)];

var now = new Date('11/28/2016 12:00 AM');
var SEC = 1000;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;

function getAndSetCurrentTime(moment) {
	var timeUntil = moment - new Date();

	var days = Math.floor(timeUntil / DAY);
    var hours = Math.floor((timeUntil % DAY) / HOUR);
    var minutes = Math.floor((timeUntil % HOUR) / MIN);
    var seconds = Math.floor((timeUntil % MIN) / SEC);

    $(timer).html(days + " days, " + hours + ":" + minutes + ":" + seconds);
}

$(cuteHeader).html(newHeader);
getAndSetCurrentTime(now);
setInterval(function() {
	getAndSetCurrentTime(now)}, 1000);