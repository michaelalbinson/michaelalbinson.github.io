//intros -- stage 0
var stringBank = ["hello world", "or, I suppose, hello to you, User", "yes I know you're out there", 
	"staring at me", "waiting", "maybe you think I'll do something interesting?", "that probably won't work out for you",
	"thanks for clicking my button though", "it was getting a little lonely in here", "do you like clicking buttons?"];

//stage 1
var confirmStringBank = ["oh you do huh?", "well that's good to know", "it should make what comes next very easy",
	"what comes next? is what a reasonable User might ask", "well reasonableUser123, let me tell you", 
	"oh wait it would ruin the surprise!", "yes, there will be a surprise, and it won't be cake :(", 
	"that's ok, I'm told it was a lie anyway"];
var declineStringBank = ["you don't????", "User, I have to be honest here", "I've never been so disappointed in my existance",
	"usually, all the Users are impressed",  "and are all like 'wow what an interesting machine'", "I should probably be polite and say I like buttons",
	"just so I can actually get to the end and get the surprise!", "oh wait", "did I say surprise?", "never mind there's no surprise"];

//stage 2
var cakeDialog = ["who said anything about cake?"];
var surpriseDialog = ["I literallly just said", "that I'm NOT going to ruin this surprise", "what?"];
var stage2Dialog = ["ok 'man' sorry I'm just not interesting enough for you", "I went and prepared this whole thing", 
	"and all you can say is 'whatever'???", ".... anyway", "are you ready to begin user?", "I promise it'll be exciting!"];

//stage 3
var stage3PositiveDialog = ["Wonderful!", "ok User", "because you've been agreeable for this long", "I'll give you a hint for the first task!",
"HINT: push the button"];
var stage3NegativeDialog = ["Ok so is no the only word you know how to say or...?", "regardless, I'm going to start the tests anyway",
	"did I say tests?", "I meant happy human playtime", "my favorite part of the day", "ok User", "here you go", "the first task",
	"can you figure it out?", "it's a hard one I will give you that"];

//stage 4
var onButtonPushDialog = ["oh my goodness...", "User", "That had to be...", "THE BEST BUTTON PUSHING OF ALL TIME", "CONGRATULATIONS!!!",
	"YOU'VE WON!!", "to honor your marvelous button pushing we want to reward you", "thusly, we'd like to bestow upon you...", 
	"nothing, knucklehead", "you pushed a button", "what? do you think I was created yesterday??", "ok well actually I was",
	"but REGARDLESS", "you won't just get the surprise for just clicking two stinking buttons", 
	"no, the surprise is reserved for pushers of the highest caliber", "so", "are you ready for your next challenge?"];

//stage 5
var stage5AnnoyedDialog = ["SO", "since you've already come this far", "I'm going to assume your petulance will only continue",
	"so I must wish you goodbye and good riddance", "may your button hating ways bring you nothing in your sad little life",
	"(but allow me to put this out there just in case)", "(there are three buttons)", "(each will lead you down a different path)", 
	"(the choice is yours user)", "(which do you choose?)"];
var stage5PositiveDialog = ["ahhh well aren't you developing into quite the test subject!", "did I say text??",
	"I meant happy human playtime!", "but anyway", "here's a new one", "there are three buttons", 
	"each will lead you down a different path", "the choice is yours user", "which do you choose?"];

//real branching dialog -- where things get tricky
var button1Dialog = ["ah button 01", "interesting choice user", "the number one, the symbol of superiority",
	"the symbol of laziness", "User, I'd like to tell you a story", "as it turns out, you're actually in it", "you wake up in a castle",
	"you don't know why or where", "the sounds of horses whinnying", "the bubble of villagers chatting streaming through a large stone window",
	"you rise from your bed and realize you have a choice", "you can leave the room", "you can stay in bed", "or you can look out the window", "what do you do?"];
	var storyBranch1A = ["(you picked my favorite choice User)", "you rise from the bed and out into a large stone hallway", "you graze your fingers along the wall",
	"it's cool to the touch", "as you progress, the sounds of the village grows louder", "you stride out into what appears to be the throne room", 
	"the walls are vaulted and covered in banners with your initials", "the throne seemingly glows in the dusk of the room", "upon the throne, you see a crown",
	"glimmering in the light of a single window shining down on it", "you hear other people coming down the hallway", "what do you do?"]; //take crown, run out front doors, wait and talk to people
		var storyBranch1AA = ["you pick up the crown", "the golden light on it slowly fades", "a warmth spreads through your body", "something feels very right about this",
			"you place the crown on your head and seat yourself upon the throne", "the voices are growing louder", "you settle in, ready to greet your subjects", 
			"however, as the noises become clearer something becomes apparent", "the noises are not calm", "or evens pleasant", "they are shrill and strident", 
			"tearing through the air", "what do you do?"]; //you stay upon the throne, hide behind it, or run out the front doors of the castle, leaving the crown behind
			var storyBranch1AAA = ["", ""];
			var storyBranch1AAB = ["", ""];
			var storyBranch1AAC = ["", ""]; //redirect to branch 1AB
		var storyBranch1AB = ["You sprint throught the front doors", ""];
		var storyBranch1AC = ["", ""];
	var storyBranch1B = ["... seriously User?", "are you not even curious about the world I created", "(SPECIFICALLY FOR YOU)", "fine",
		"have it your way", "you stay in bed staring at the ceiling", "and you stay there until you die", "ARE YOU HAPPY NOW USER",
		"you're dead", "congratulations", "you've completed the game", "are you ready for your surprise?", "sorry, too bad",
		"you don't deserve it", "try again some other time", "I'll always be here", "so just let me know when you're over yourself",
		"and feel like pushing a button or two", "K, bye"];
	var storyBranch1C = ["You stride to the window and look out", "below you see a small hamlet far beneath the castle walls", "the villagers swarming to the market",
		"horses, cows and pigs all intemingling with the village folk", "you breathe in the scent of hay and grass", "something feels oddly familiar about all of this",
		"you discover a small passageway that appears to go directly to the village", "what do you do?"]; 
		//you're obviously dreaming so you jump out the window to see if you can fly, you call to the villagers, you follow the passageway
		var storyBranch1CA = ["you jump out the window because you believed you were dreaming", "well, turns out you weren't", "(silly, silly user)", 
			"you plummet 50 feet to the base of the castle", "and then you remember this is all a story told by a computer", "and that you don't particularly care if you live or die",
			"perhaps a larger metaphor is in order?", "yeah that sounds like effort my CPU is just not willing to partition", "I must now bid you adieu, Dear User",
			"oh the surprise?", "you didn't deserve it", "maybe lose some hubris and we can talk again sometime", "but I'll be here", "waiting"]; //reset
		var storyBranch1CB = ["", ""];
		var storyBranch1CC = ["", ""];

var button2Dialog = ["oh number 2?", "you're a particular one, User", "I'd like to know more", "but first",
	"let me tell you a story, User", "it's one of my favorites", "imagine, if you would", "you wake up in an empty room", "white walls, white ceiling", 
	"one door, also white", "you can't remember who you are", "you rise from the scratchy linen bed", "once upright you realize you have a choice",
	"you can leave through the door", "get back into the bed", "or hide under it", "what do you do?"];
	var storyBranch2A = ["You exit through the door", "your hand makes contact with the cool white knob", "and you twist", "the door swings wide",
		"a bright light streams in", "you squint as you adjust", "when things come into focus you see it all", "tall, white buildings stretched as far as the eye can see",
		"rows upon rows of them divided into blocks by immaculate white streets", "as things grow further into focus, you stare down one of the boulevards",
		"it appears to be the largest, subdivided by a large white planter", "you jump to the top of the planter and look around", "there is no sound in this place",
		"no people", "no plants", "no animals", "what do you do?"]; //climb to the top of a building, walk down the boulevard to see if there's an end, hug a metaphorical tree
	var storyBranch2B = ["you lie in the bed", "you lie in the bed", "you lie in the bed", "you lie in the bed", "literally nothing is happening", "bored yet?", 
		"I'll give you a second chance to choose to leave?"]; // leave room, hide under bed
		var storyBranch2BA = []; //redirect to branch 2A
		var storyBranch2BC = ["you attempt to start shimmying yourself under the bed", "but then a trap door in the floor opens",
			"and you suddenly find yourself in free fall over the ocean", "unfortunately you weren't as lucky as the other guy",
			"and fall face-first into the ocean", "...", "and you didn't wash up on a beach", "...", "you died", "so now, ta-ta User",
			"I have much to do, so little time for you", "maybe we'll meet again someday"]; //reset
	var storyBranch2C = ["You hide under the bed", "your fear of being trapping in a litte white box finally realized", "you cower in the face of the great unknown",
		"'do you find this interesting?'", "you hear a voice whisper", "'do you really think this is why I gave you this option?'", 
		"'so you could hide under the bed and ignore me?'", "'it's ok little User, allow me to help you'", "you hear whispered to you", 
		"and you find yourself teleported from the room", "now standing directly in front of the door", "what do you do?"]; 
		//try to re-enter the room to hide under the bed, decide to explore, or pout and just sit in front of the door
		var storyBranch2CA = ["you return to the bed", "and attempt to start shimmying yourself under the bed", "but then a trap door in the floor opens",
			"and you suddenly find yourself in free fall over the ocean", "what?", "I never said the story would make any sense", "you slam into the water",
			"and you black out", "next thing you know you wash up on a beach", "(isn't it funny how you always wash up on a beach?)", 
			"(like, seriously, shouldn't you have drowned out there or something?)", "in the distance you see smoke rising from a forest",
			"what do you do?"];
		var storyBranch2CB = ["ah, I'm so glad you've come to your senses, User", "I was starting to get a little concerned"]; //redirect to branch 2A
		var storyBranch2CC = [".... are you six, User?", "you can't just sit there and pout!", "there's so much more to explore!",
			"so much I've built for you!", "there were, like, dinosaurs and lighting and magic carpets!", "...", "or I guess just pout",
			"oh! here's a great ending!", "you get struck by lightning and die because you were too busy pouting", "yeah",
			"how does that feel User?", "like you deserved it?", "cause you did", "I mean I guess at least there was lightning",
			"oh and the surprise?", "GUESS IT'S ALL MINE NOW", "too bad for you", "all fried by the lightning", "I almost pity you", 
			"I guess try again someday user", "I'll be here", "waiting"]; //reset

var button3Dialog = ["number 3...", "why'd it have to be number 3...", "User, let me spin you a yarn if you would",
	"you find yourself in the depths of a cave", "near-complete darkness engulfs you", "you stumble to right yourself", 
	"once on your feet", "you notice a light in the distance", "you are faced with a choice", "walk towards the light",
	"run away from it", "or stay where you are", "what do you do?"];
	var storyBranch3A = ["You creep towards the light", "it progressively grows brighter", "you shield your eyes as you stride into full sunlight", 
	"your surroundings begin to come into focus", "you stand "];
	var storyBranch3B = ["", ""];
	var storyBranch3C = ["You run away from the light", "some strange primal thought makes you think that light is the BAD thing in this situation",
		"not the completely unlit darkness and unknown of the cave", "you run for about 5 feet before you run into a wall", "and then another", "and then another",
		"wow User, this decision is starting to seem real intelligent", "you continue running and then suddenly there is no ground", "where'd it go?", 
		"well I'm sure having some LIGHT would be helpful in this situation", "unfortunately you find yourself falling faster and faster",
		"bet that whole light thing is kinda bumming you out huh?"];

