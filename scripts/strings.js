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
var story1BranchA = ["(you picked my favorite choice User)", "you rise from the bed and out into a large stone hallway", "you graze your fingers along the wall",
	"it's cool to the touch", "as you progress, the sounds of the village grows louder", "you stride out into what appears to be the throne room", 
	"the walls are vaulted and covered in banners with your initials", "the throne seemingly glows in the dusk of the room", "upon the throne, you see a crown",
	"glimmering in the light of a single window shining down on it", "you hear other people coming down the hallway", "what do you do?"]; //take crown, run out front doors, wait and talk to people
	var story1BranchAA = ["you pick up the crown", "the golden light on it slowly fades", "a warmth spreads through your body", "something feels very right about this",
		"you place the crown on your head and seat yourself upon the throne", "the voices are growing louder", "you settle in, ready to greet your subjects", 
		"however, as the noises become clearer something becomes apparent", "the noises are not calm", "or evens pleasant", "they are shrill and strident", 
		"tearing through the air", "what do you do?"]; //you stay upon the throne, hide behind it, or run out the front doors of the castle, leaving the crown behind
		var = story1BranchAAA = [];
		var = story1BranchAAB = [];
		var = story1BranchAAC = [];
	var story1BranchAB = [];
	var story1BranchAC = [];
var story1BranchB = ["... seriously User?", "are you not even curious about the world I created", "SPECIFICALLY FOR YOU", "fine",
	"have it your way", "you stay in bed staring at the ceiling", "and you stay there until you die", "ARE YOU HAPPY NOW USER",
	"you're dead", "congratulations", "you've completed the game", "are you ready for your surprise?", "sorry, too bad",
	"you don't deserve it", "try again some other time", "I'll always be here", "so just let me know when you're over yourself",
	"and feel like pushing a button or two", "K, bye"];
var story1BranchC = ["You stride to the window and look out", "below you see a small hamlet far beneath the castle walls", "the villagers swarming to the market",
	"horses, cows and pigs all intemingling with the village folk", "you breathe in the scent of hay and grass", "something feels oddly familiar about all of this",
	"you discover a small passageway that appears to go directly to the village" "what do you do?"]; 
	//you're obviously dreaming so you jump out the window to see if you can fly, you call to the villagers, you follow the passageway
	var story1BranchCA = ["you jump out the window because you believed you were dreaming", "well, turns out you weren't", "(silly, silly user)", 
	"you plummet 50 feet to the base of the castle", "and then you remember this is all a story told by a computer", "and that you don't particularly care if you live or die",
	"perhaps a larger metaphor is in order?", "yeah that sounds like effort my CPU is just not willing to partition", "I must now bid you adieu, Dear User",
	"oh the surprise?", "you didn't deserve it", "maybe lose some hubris and we can talk again sometime", "but I'll be here", "waiting"];
	var story1BranchCB = [];
	var story1BranchCC = [];

var button2Dialog = ["oh number 2?", "you're a particular one, User", "I'd like to know more", "but first",
	"let me tell you a story, User", "it's one of my favorites", "imagine, if you would", "you wake up in an empty room", "white walls, white ceiling", 
	"one door, also white", "you can't remember who you are", "you rise from the scratchy bed", "once upright you realize you have a choice",
	"you can leave through the door", "get back into the bed", "or hide under it", "what do you do?"];
	var story2BranchA = [];
	var story2BranchB = [];
	var story2BranchC = [];

var button3Dialog = ["number 3...", "why'd it have to be number 3...", "User, let me spin you a yarn if you would",
	"you find yourself in the depths of a cave", "near-complete darkness engulfs you", "you stumble to right yourself", 
	"once on your feet", "you notice a light in the distance", "you are faced with a choice", "walk towards the light",
	"run away from it", "or stay where you are", "what do you do?"];
	var story3BranchA = [];
	var story3BranchB = [];
	var story3BranchC = [];

