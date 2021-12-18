"use strict"

const heart =
"<pre style='size: 0.5em'>\
        @@@@@@           @@@@@@          \n\
      @@@@@@@@@@       @@@@@@@@@@        \n\
    @@@@@@@@@@@@@@   @@@@@@@@@@@@@@      \n\
  @@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@    \n\
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   \n\
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  \n\
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  \n\
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  \n\
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   \n\
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    \n\
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     \n\
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      \n\
      @@@@@@@@@@@@@@@@@@@@@@@@@@@        \n\
        @@@@@@@@@@@@@@@@@@@@@@@          \n\
          @@@@@@@@@@@@@@@@@@@            \n\
            @@@@@@@@@@@@@@@              \n\
              @@@@@@@@@@@                \n\
                @@@@@@@                  \n\
                  @@@                    \n\
                   @                     </pre>";

const dino = "<pre>\
     _            __________                                      \n\
   _|_|_        /            \                                                     \n\
  .~q`, -------|| I love you! |                                                     \n\
 {__,  \\       \\___________/                                                    \n\
    \\  \\                                                                       \n\
     \\  \\                                                                      \n\
      \\  \\                                                                     \n\
       \\  `._            __.__                                                  \n\
         \\    ~-._  _.==~~     ~~--.._                                          \n\
          \\        '                  ~-.                                       \n\
           \\      _-   -_                `.                                     \n\
            \\    /       }        .-    .  \\                                   \n\
             `. |      /  }      (       ;  \\                                   \n\
               `|     /  /       (       :   '\\                                 \n\
                \\    |  /        |      /       \\                              \n\
                 |     /`-.______.\\     |~-.      \\                             \n\
                 |   |/           (     |   `.      \\_                          \n\
                 |   ||            ~\\   \\      '._    `-.._____..----..___       \n\
                 |   |/             _\\   \\         ~-.__________.-~~~~~~~~~'''   \n\
               .o'___/            .o______}                                      </pre>";

const headers = [
    "Hey, guess what? I love you",
    "Guess how many days left :)))",
    "&hearts;",
    "Hi. Hi. Hey. Hey you. Guess what? Chickenbutt ;)",
    "I missssss youuuuu",
    ":P",
    "Hey guess where I wanna be right now? Oh yeah, that's right, with you",
    "I love you",
    "I wanna cuddle with you right now",
    "I wanna kiss you all over ;)",
    "I love you a lot",
    "Hey remember that one time when we did that thing? Me too :)",
    heart,
    dino
];

const imageSources = [
    "./assets/onion_bike.jpg",
    "./assets/onion_fire.gif",
    "./assets/onion_harpoon.webp",
    "./assets/onion_harpoon_tu.png",
    "./assets/onion_mic_toss.gif",
    "./assets/onion_thumbsup.jpg"
]

const newHeader = headers[Math.floor(Math.random()*headers.length)];

const now = new Date('9/26/2021 5:00 PM');
const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

function getAndSetCurrentTime(moment) {
    const timeUntil = moment - new Date();

    const days = Math.floor(timeUntil / DAY);
    let hours = Math.floor((timeUntil % DAY) / HOUR);
    let minutes = Math.floor((timeUntil % HOUR) / MIN);
    let seconds = Math.floor((timeUntil % MIN) / SEC);

    if (hours < 10)
    	hours = "0" + hours;

    if (minutes < 10)
    	minutes = "0" + minutes;

    if (seconds < 10)
    	seconds = "0" + seconds;

    $(timer).html(days + " days, " + hours + ":" + minutes + ":" + seconds);
}

$(cuteHeader).html(newHeader);

// start the count down
getAndSetCurrentTime(now);
setInterval(function() { getAndSetCurrentTime(now) }, 1000);

// set up the image/gif
setTimeout(function() { getURL(); }, 100)

function getURL() {
    const newImg = imageSources[Math.floor(Math.random()*imageSources.length)];
    console.log(newImg)
    $(comic).attr("src", newImg);
    $(comic).attr("width", "100%");
    $(comic).attr("height", "100%");
}

