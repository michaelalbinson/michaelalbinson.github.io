"use strict"

var headers = ["Hey, guess what? I love you", "Guess how many days left :)))", "&hearts;", "Hi. Hi. Hey. Hey you. Guess what? Chickenbutt ;)",
			"I missssss youuuuu", ":P", "Hey guess where I wanna be right now? Oh yeah, that's right, with you", "I love you",
			"I wanna cuddle with you right now", "I wanna kiss you all over ;)", "I love you a lot"];
var imageSources = ["http://65.media.tumblr.com/6da638acc238255f0f74d6426a80c9df/tumblr_inline_nsvhtpGz5a1r0eu1s_500.png",
                        "https://i.ytimg.com/vi/W5sgIcwSl0g/maxresdefault.jpg", "https://i.ytimg.com/vi/J5X4FmB_Rb4/hqdefault.jpg",
                        "http://vignette3.wikia.nocookie.net/steven-universe/images/f/f6/Harpoon_Gun.JPG/revision/latest?cb=20150521122917"]

var newHeader = headers[Math.floor(Math.random()*headers.length)];

var now = new Date('11/24/2016 12:00 AM');
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

    if (hours < 10)
    	hours = "0" + hours;

    if(minutes < 10)
    	minutes = "0" + minutes;

    if(seconds < 10)
    	seconds = "0" + seconds;

    $(timer).html(days + " days, " + hours + ":" + minutes + ":" + seconds);
}

$(cuteHeader).html(newHeader);
getAndSetCurrentTime(now);
setInterval(function() {
	getAndSetCurrentTime(now)}, 1000);

setTimeout(function(){getURL();}, 100)

function getURL() {
    var newImg = imageSources[Math.floor(Math.random()*imageSources.length)];
    console.log(newImg)
    $(comic).attr("src", newImg);
    $(comic).attr("width", "100%");
    $(comic).attr("height", "100%");
}