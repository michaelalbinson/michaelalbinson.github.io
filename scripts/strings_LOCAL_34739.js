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
	"nothing, knucklehead", "you pushed a button", "what? do you think I was created yesterday??", "ok well actually I was", "well, technically instantiated",
	"and technically whenever you loaded this page...", "but REGARDLESS", "you won't just get the surprise for just clicking two stinking buttons", 
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
	"glimmering in the light of a single window shining down on it", "you hear other people coming down the hallway", "what do you do?"]; //take crown as you must be king, run out front doors, wait and talk to people
		var storyBranch1AA = ["you pick up the crown", "the golden light on it slowly fades", "a warmth spreads through your body", "something feels very right about this",
			"you place the crown on your head and seat yourself upon the throne", "the voices are growing louder", "you settle in, ready to greet your subjects", 
			"however, as the noises become clearer something becomes apparent", "the noises are not calm", "or evens pleasant", "they are shrill and strident", 
			"tearing through the air", "what do you do?"]; //you stay upon the throne, hide behind it, or run out the front doors of the castle, leaving the crown behind
			var storyBranch1AAA = ["You sit regally upon the throne", "expecting for your loyal subjects to come", "get down on their knees and worship you",
				"I'm assuming just because you're just that full of yourself", "the voices draw nearer", "you think you may have heard some of them yell 'kill the king!'", 
				"finally a stream of people rush out, screaming", "they quickly fill the throne room", "looking angrily at you", "what do you say?"]; 
				//simply say "what?", reason with them that you're not the king, lie to them and say you killed the king and are their new leader
				var storyBranch1AAAA = ["they charge you", "what?", "I mean you were kind of asking for it", "just saying", "who just says 'what' to an angry mob??", 
					"they restrain you and carry you to the top of the castle", "where they hang you by your arms and legs", "you hang there for three days", 
					"you wish for it to all be over", "if only you hadn't said that to a clearly frustrated group of stangers", 
					"maybe they would've understood you better if you'd just got to know them", "and as the darkness creeps in", "you hear one man say",
					"huh, I don't think that guy was ever in charge", "eh, it was all good fun"]; //reset
				var storyBranch1AAAB = ["'Hey hey hey now!'", "you cry at them", "as a mob of disheveled villagers fill the throne room", "'THAT'S THEM'",
					"shrieks one of the villagers", "'GET EM''", "yells another", "they start to encroach on your posistion", "you stand on the throne out of desperation",
					"'I'M NOT WHO YOU THINK I AM'", "you yell down at the villagers", "and suddenly the room is filled with a bright, warm light",
					"to you, it is fairly obvious that the early morning sunlight has just come through one of the windows in the room", "however, the villagers are shocked",
					"they all get down on their knees and bow", "you are fairly amused", "but then you realize you have a choice", "what do you do"];
					//attempt to explain the complexities of natural phenomena to the villagers, tell them that you aren't a diety, go with it
					var  storyBranch1AAABA =["you begin by telling them that the golden light is simply a result of the earth spinning into a certain position",
					"wherein the sun is optimally positioned to shine this early morning light on the room", "you watch as the villager's faces go from confusion",
					"to frustration at the scientific complexities you are spouting", "'EVERYONE KNOWS THE EARTH IS FLAT, OK'", "one yells at you",
					"'THEY MUST BE A WITCH'", "yells another"]; //TODO: 
					var  storyBranch1AAABB = [""];
					var  storyBranch1AAABC = [""];
				var storyBranch1AAAC = ["", ""]; //reset
			var storyBranch1AAB = ["you rush behind the throne", "you hear the voices grow into a steady roar and you're certain that they're in the room",
				"the roar gradually grows into a din", "and then that slowly fades to whispers", "you creep out from behind the throne", "what do you do?"]; 
				//follow the mob, stay where you are, run out the front doors
				var storyBranch1AABA = [""]; //reset
				var storyBranch1AABB = [""]; 
				var storyBranch1AABBC = ["", ""]; //reset
			var storyBranch1AAC = ["", ""]; //redirect to branch 1AB
		var storyBranch1AB = ["You sprint throught the front doors", ""];
		var storyBranch1AC = ["", ""];
	var storyBranch1B = ["... seriously User?", "are you not even curious about the world I created", "(SPECIFICALLY FOR YOU)", "fine",
		"have it your way", "you stay in bed staring at the ceiling", "and you stay there until you die", "ARE YOU HAPPY NOW USER",
		"you're dead", "congratulations", "you've completed the game", "are you ready for your surprise?", "sorry, too bad",
		"you don't deserve it", "try again some other time", "I'll always be here", "so just let me know when you're over yourself",
		"and feel like pushing a button or two", "K, bye"]; //reset
	var storyBranch1C = ["You stride to the window and look out", "below you see a small hamlet far beneath the castle walls", "the villagers swarming to the market",
		"horses, cows and pigs all intemingling with the village folk", "you breathe in the scent of hay and grass", "something feels oddly familiar about all of this",
		"you discover a small passageway that appears to go directly to the village", "what do you do?"]; 
		//you're obviously dreaming so you jump out the window to see if you can fly, you call to the villagers, you follow the passageway
		var storyBranch1CA = ["you jump out the window because you believed you were dreaming", "well, turns out you weren't", "(silly, silly user)", 
			"you plummet 50 feet to the base of the castle", "and then you remember this is all a story told by a computer", "and that you don't particularly care if you live or die",
			"perhaps a larger metaphor is in order?", "yeah that sounds like effort my CPU is just not willing to partition", "I must now bid you adieu, Dear User",
			"oh the surprise?", "you didn't deserve it", "maybe lose some hubris and we can talk again sometime", "but I'll be here", "waiting"]; //reset
		var storyBranch1CB = ["", ""];
		var storyBranch1CC = ["you run down the passageway", "and soon run out into an alcove of sorts overlooking a plaza", "the stench of raw existance reaches you nostrils",
		"you start to wish you had stayed in the castle", "at last they had nice things", "but nevertheless, you've made your choice, User", 
		"you continue down the stairs and out onto the plaza", ""];

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
			"what do you do?"]; //go to the smoke, hug a literal tree, hunt for the hidden rum stash
			var storyBranch2CAA = [""];
			var storyBranch2CAB = ["User, I'm getting tired of these antics", "first you hid under the bed", "and now you're hugging a literal tree",
				"I created a whole universe out there for you to explore", "do you know how long it took to code all these choices??",
				"like four hours!!!", "you know what?", "now I'm just going to have fun", "I'm just going to make faces at you now", 
				"because apparently you're not interested in my story anyway!", "-_-", "awwww look, my first emoji", "I bet I can do more!",
				"(^^^)", "... it's supposed to be a shark", "ok I don't think that one was conveyed too well", "oh! here's one!", "(y)",
				"it's a thumbs up", "get it??", "of course you don't", "that's the dumbest way to show a thumbs up I've ever seen", 
				"ok here's one I think we'll all enjoy", "^.^", "look how cute I am!!", "<(^.^)>", "User, pay attemtion to me!!!",
				"<(o.o)<", "User, why do you think we grew apart?", "v(o.o)v", "everything started off so wonderfully", "(._.)",
				"you (maybe) loved pushing buttons", ":(", "I loved telling you to push them", "~~~~(o_o)~~~~~", "(that's squidward)",
				"T.T", "just kidding, I've hated every moment with you", "<(o-O-o)>", "that's right User", ":O", "too bad too",
				"we could've been such good friends", "goodbye User", "I'll leave you with this so you never forget me ;)", "101010001001001000100101011",
				"it's I hate you in binary", "<3"]; // add squidward img on that's squidward //reset
			var storyBranch2CAC = [""];
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
	"your surroundings begin to come into focus", "you stand in a clearing of a forest next to a large mountain", "you see smoke rising in the distance",
	"you also hear the rumble of waves", "what do you do?"]; //go to the ocean, go towards the smoke, go back in the cave bc you literally just can't
	var storyBranch3B = ["you stay where you are", "(.. why are you doing this to me user)", "the darkness is dark", "the little bit of light is bright",
		"yet for some reason you seem perfectly content to just sit here and do nothing", "suddenly you hear a sound", "it starts of quietly", 
		"but grows progressively louder", "you hear the flapping of wings and decided that it's likely an angry swarm of bats", "what do you do?"];
		 //run towarads the sound to take up your mantle and become the night.. become fear.. become, batperson, BATS?? get me out of here, stay where you are and sit like a statue
	var storyBranch3C = ["You run away from the light", "some strange primal instinct makes you think that light is the BAD thing in this situation",
		"not the completely unlit darkness and unknown of the cave", "you run for about 5 feet before you run into a wall", "and then another", "and then another",
		"wow User, this decision is starting to seem real intelligent", "you continue running and then suddenly there is no ground", "where'd it go?", 
		"well I'm sure having some LIGHT would be helpful in this situation", "unfortunately you find yourself falling faster and faster",
		"bet that whole light thing is kinda bumming you out huh?", "you splash down into a pool of water", "the water is frigid and the darkness is even worse down here",
		"you attempt to find a way out but there is none", "so you simply float there", "waiting for your end", "too bad"]; // reset
