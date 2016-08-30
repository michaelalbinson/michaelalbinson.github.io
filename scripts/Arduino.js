"use strict";

//the space allows us to locate names w/o removing them from variable/funciton names might still delete them from comments :(
var datatypes = ["void ", "bool ", "int ", "String ", "boolean ", "unsigned ", "long ", "pointer ", "string ", "byte ", "double ", "const ",
					"volitile ", "static "]; //const and volitile are special and needed for interrupts
					//const is preferred of #define to create constants
var otherThingsToLookFor = ["#define ", "enum ", "struct ", "setup()", "loop()"];

var failExecutionIfFound = ["#include ", "word ", "goto "]; //maybe SerialEvent, enum, struct
var LED_BUILTIN = "LED_BUILTIN";
var HIGH = "HIGH";
var LOW = "LOW";
var INPUT = "INPUT";
var OUTPUT = "OUTPUT";
var IMPUT_PULLUP = "INPUT_PULLUP";
var allowInterrupts = true;

var startTime = window.performance.now();

function ArduinoUNO() {
	var pinNameSet = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13',
					'AREF', 'GND-D', 'GND-A1', 'GND-A2', '5V', '3.3V', 'Vin', 'IOREF', 'RESET'];
	var pins;

	function initPins(){
		i = 1;
		for (pinName in pinNameSet){
			pins.push(new Pin(i, pinName));
		}
	}

	this.getPin = function(pinName){
		for (pin in pins){
			if (pin.getPinName() === pinName)
				return pin;
		}
		throw new Error("Selected pin '" + pinName + "' was not found");
		return {};
	}

	this.getPinDescription = function(pinName) {
		try {
			var pin = this.getPin(pinName);
			return pin.getPinName;
		} catch(e) {
			console.log(e.message);
			return "";
		}

	}
}

function Pin(number, name){ //additional arguments are assumed to be features associated with each pin
							//if those features do not exist they will be skipped.
	var pinNumber = number;
	var pinName = number;
	var desc;
	var possibleFeatures = ["PWM", "TX", "RX"];
	var possibleStates = ["INPUT", "OUTPUT", "INPUT_PULLUP"];
	var state = "INPUT"; //either INPUT, INPUT_PULLUP or OUTPUT
	var possibleLevels = ; //HIGH or LOW

	determineDesc();

	this.getPinName = function() {
		return pinName;
	}

	this.getPinNumber = function() {
		return pinNumber;
	}

	this.getDescription = function() {
		return desc;
	}

	this.getFeatures = function() {
		return features;
	}

	this.getState = function(){
		return state;
	}

	this.getLevel = function() {
		if (!level)
			return "level not yet configured";

		return level;
	}

	this.setLevel = function(setTo) {
		if (!possibleLevels.contains(setTo)){
			throw new Error("You cannot set a pin to " + setTo + "it is not a valid pin level");
			return;
		}
		level = setTo;
	}

	this.setState = function(setTo) {
		if (possibleStates.contains(setTo))
			state = setTo;
	}

	function determineDesc() {
		if (pinName === "RESET")
			desc = "Bring this line LOW to reset the Arduino."; //add? "Typically used to add a reset button to shields which block the one on the board."
		else if (pinName === "IOREF")
			desc = "This pin on the Arduino board provides the voltage reference with which the microcontroller operates.";
		else if (pinName === "Vin")
			desc = "Leads from a battery can be inserted in the GND and Vin pin headers of the POWER connector to power the Arduino.";
		else if (pinName === "AREF")
			desc = "";
		else if (pinName.contains('GND'))
			desc = "A ground pin. ";
		else if (pinName.contains('V'))
			desc = "A voltage output that provides the specified (either 5V or 3.3V) voltage out.";
		else if(pinName.contains('A'))
			desc = "An analog pin that can be set as an input or output to read and write analogue voltages between 0 and 5 volts.";
		else if(pinNAme.contains('D'))
			desc = "A digital pin that can be set as an input or output to read and write digital values " 
					+ "(either 0 or LOW if there is no voltage applied or 1 or HIGH if there is a voltage applied).";
		else 
			throw new Error("this pin wasn't addressed " + pinName);
	}
}

/**
 * Button object
**/
function Button(name, buttonFunction) {
	var buttonName = name;
	var buttonFunc = buttonFunction;


}

function LED(ledName) {
	var state = false;
	var name = ledName;

	this.getState = function() {
		return state;
	}

	this.getName = function() {
		return name;
	}

	this.setState = function(newState) {
		state = newState;
		//set state in DOM
	}
}

/**
 * Does its best to take c code and make it javascript :D
**/
function ScriptConverter(script) {
	var scriptToConvert = script;

	function convert() {
		var converted = convertToJS();
		this.debugScript(converted);
		return convertedScript;
	}

	function convertToJS() {
		return converted;
	}

	this.debugScript = function(converted) {
		//look for actual errors in the C code
	}

	this.verifyScript = function() {
		return convertToJS();
	}

	function failConversion() {

	}
}

/**
 * Manages the script execution
**/
function ExecutionManager(script) {
	this.startTime = window.performance.now();
	var converter = new ScriptConverter(script);
	var script = converter.convert();

	this.run = funciton(script){
		execute(script);
	}

	this.debug = function(){
		converter.debug();
	}
}

/**
 ************ All the fun global functions of Arduino exposed in javascript :D *********
**/

/** 
 * Digital I/O
**/

function pinMode(pin, mode) {
	var modes = ["INPUT", "OUTPUT", "INPUT_PULLUP"];

}

function digitalWrite(pin, level) {
	var levels = ["LOW", "HIGH"];

}

function digitalRead(pin) {

}

/** 
 * Analog I/O
**/

function analogReference(ref) {

}

function analogRead(pin) {

}

function analogWrite(pin, level) { //PWM?

}

// skipping due and zero stuff for now

/** 
 * Advanced I/O
**/

function tone(pin, freq) {

}

function noTone(pin) {

}

function shiftOut() {

}

function shiftIn() {

}

function pulseIn() {

}

/** 
 * Time
**/

function millis() {
	 return Math.floor((window.performance.now() - startTime)); //millis since start time (micros are given)
}

function micros() {
	 return (window.performance.now() - startTime)*1000;
}

function delay(ms) {
    return(new Promise(function(resolve, reject) {
        setTimeout(function() {
        	resolve();
        }, ms);
    }));
}

function delayMicroseconds(us) {
	delay(Math.round(us/1000)); //
}

/** 
 * Math
**/

function min(numberOne, numberTwo) {
	return Math.min(numberOne, numberTwo);
}

function max(numberOne, numberTwo) {
	return Math.max(numberOne, numberTwo);
}

function abs(number) {
	return Math.abs(number);
}

function constrain(numberToConstrain, lowerBound, upperBound) {

}

function map(x, in_min, in_max, out_min, out_max) { //linear mapping straight from the Arduino website
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function pow(x, y) {
	return Math.pow(x, y);
}

function sqrt(x) {
	return Math.sqrt(x);
}

/**
 *	Trigonometry
**/

function sin(rad) {
	return Math.sin(rad);
}

function cos(rad) {
	return Math.cos(rad);
}

function tan(rad) {
	return Math.tan(rad);
}

/** 
 * Characters
**/

function isAlphaNumberic(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (isUpperCase(thisChar) || isLowerCase(thisChar) || isDigit(thisChar))
		return true;
	else
		return false;
}

function isAlpha(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (isUpperCase(thisChar) || isLowerCase(thisChar))
		return true;
	else
		return false;
}

function isAscii(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

}

function isWhitespace(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

}

function isControl(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

}

function isDigit(thisChar) {
	var digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (digits.contains(thisChar))
		return true;
	else
		return false;
}

function isGraph(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (!isWhitespace(thisChar) && isPrintable(thisChar))
		return true;
	else
		return false;
}

function isLowerCase(thisChar) {
	var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'. 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
							'v', 'w', 'x', 'y', 'z'];
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}
	if (lowerCaseLetters.contains(thisChar))
		return true;
	else
		return false;
}

function isPrintable(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

}

function isPunct(thisChar) {
	var punctuation = ['"', "'", ',', '.', '/', ';', ':', '<', '>', '?', '[', ']', '{', '}', '|', '!', '@', '#', '$', '%', '^',
						'&', '*', '(', ')', '-', '_', '=', '+', '`', '~'];
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (punctuation.contains(thisChar))
		return true;
	else 
		return false;
}

function isSpace(thisChar) {
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (thisChar === " ")
		return true;
	else
		return false;
}

function isUpperCase(thisChar) {
	var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
							'U', 'V', 'W', 'X', 'Y', 'Z'];
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (upperCaseLetters.contains(thisChar))
		return true;
	else
		return false;
}

function isHexadecimalDigit(thisChar) {
	var hexChars = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
	if (thisChar.length > 2){
		throw new Error("This input is not a char");
		return;
	}

	if (isDigit() || hexChars.contains(thisChar))
		return true;
	else
		return false;
}

/** 
 *	Random Numbers
**/

function randomSeed(seed) {
	return random();
}

function random(min, max) { //likely will not repeat as you can expect the Arduino random to repeat
	if (max === undefined){
		return randomOnlyWithMax(min); //min will actually be the max in this case (see arduino docs, two implementations of the random func)
	}
	return randomWithMaxAndMin(min, max);
}

function randomOnlyWithMax(max) { //return between 0 and max, must be a long or less (i.e. –2147483648 to 2147483647)
	if (max > 2147483647 || max < 0){
		throw new Error("The first number provided must be between 0 and 2147483647");
		return;
	}

	var numOne = 0;
	var numTwo = 0;
	var numThree = 0;
	var numFour = 0;
	var randomReturn = max + 1;

	while (numOne == 0 && randomReturn <= max) {
		numOne = Math.floor(Math.random()*100);
		numTwo = Math.floor(Math.random()*100);
		numThree = Math.floor(Math.random()*100);
		numFour = Math.floor(Math.random()*100);
		randomReturn = numOne*numTwo*numThree*numFour;
	}

	return randomReturn;
}

function randomWithMaxAndMin(min, max) { // return between min and max
	if (min < –2147483648 || min > max){
		throw new Error("The first number provided must be between –2147483648 and the second argument");
		return;
	}
	if (max > 2147483647 || max < min){
		throw new Error("The second number provided must be between the first argument and 2147483647");
		return;
	}
	var numOne = 0;
	var numTwo = 0;
	var numThree = 0;
	var numFour = 0;
	var plusOrMinus = 0;
	var returnThis = max+1;

	while (numOne == 0 && returnThis <= min && returnThis >= max){
		numOne = Math.floor(Math.random()*100);
		numTwo = Math.floor(Math.random()*100);
		numThree = Math.floor(Math.random()*100);
		numFour = Math.floor(Math.random()*100);
		plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		returnThis = numOne*numTwo*numThree*numFour*plusOrMinus;
	}

	return returnThis;
}

/** 
 * Bits and Bytes
**/

function lowByte() {

}

function highByte() {

}

function bitRead() {

}

function bitWrite() {

}

function bitSet() {

}

function bitClear() {

}

function bit() {

}

/** 
 * External Interrupts -- may not end up being supported
**/

function attachInterrupt(pin, ISR, mode) {

}

function detachInterrupt() {

}

function digitalPinToInterrupt(pin) {
	if (pin !== typeof number)
}

/** 
 * Interrupts
**/

function interrupts() { //enables interrupts
	allowInterrupts = true;
}

function noInterrupts() { //disables interrupts
	allowInterrupts = false;
}

/**
 * Provides the "Serial" object, realistically I won't be able to deliver some of it's member functions and have them work properly
**/
function SerialWindow() {
	var serialBegun = false;
	var serialSpeed;

	this.available = function() {
		return serialBegun;
	}

	this.availableForWrite = function() {
		//returns int number of bytes avalable to write
	}

	this.begin = function(baudRate) {
		var possibleValues = [300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200];
		if (serialBegun) {
			throw new Error("Serial connection already begun");
			return;
		}

		if (typeof baudRate !== "number") {
			throw new Error("Begin requires an int");
			return;
		}

		if (!possibleValues.contains(baudRate)) {
			throw new Error("Invalid baud rate, this must be one of 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, or 115200");
			return;
		}

		serialSpeed = baudRate;
		serialBegun = true;
	}

	this.end = function() {
		if (!serialBegun) {
			throw new Error("The Serial connection was never initiated");
			return;
		}
		serialBegun = false;
	}

	this.find = function(stringToSearchFor) {
		//search serial output for this string
		//return true/false
	}

	this.findUntil = function(serachForThis, untilThisStringFound) {
		//return true/false
	}

	this.flush = function() {
		//wait for completion writing to Serial
	}

	this.parseFloat = function() {
		// returns the first valid floating point number from the Serial buffer. negative sign ignored
	}

	this.parseInt = function() {
		//Looks for the next valid integer in the incoming serial stream. negative sign ignored
		//Zero returned if timeout reached
	}

	this.parseInt = function(skipChar) {
		//Looks for the next valid integer in the incoming serial stream. negative sign ignored
		//Zero returned if timeout reached
		//skipChar used to skip the indicated char in the search. Used for example to skip thousands divider.
	}

	this.peek = function() {
		//Returns the next byte (character) of incoming serial data without removing it from the internal serial buffer
	}

	this.print = function(printThis) {
		//TODO: print no newline
	}

	this.println = function() {
		//TODO: println w newline
	}

	this.read = function() {
		// Reads incoming serial data
	}

	this.readBytes = function(buffer, length) {
		// Serial.readBytes() reads characters from the serial port into a buffer. The function terminates if the determined length 
		// has been read, or it times out (see Serial.setTimeout()).
		// buffer: the buffer to store the bytes in (char[] or byte[])
		// length : the number of bytes to read (int)
		// returns byte
	}

	this.readBytesUntil = function() {
	// 	Serial.readBytesUntil() reads characters from the serial buffer into an array. The function terminates if the terminator 
	//  character is detected, the determined length has been read, or it times out
// 		character : the character to search for (char)
// 		buffer: the buffer to store the bytes in (char[] or byte[]) 
//		length : the number of bytes to read (int)
// 		returns a byte
	}

	this.readString = function() {
		//Serial.readString() reads characters from the serial buffer into a string. The function terminates if it times out
		// returns A string read from the serial buffer
	}

	this.readStringUntil = function(terminator) {
// readStringUntil() reads characters from the serial buffer into a string. The function terminates if the terminator character is detected or it times out
// returns The entire string read from the serial buffer, until the terminator character is detected
	}

	this.setTimeout = function(time) {
// Serial.setTimeout() sets the maximum milliseconds to wait for serial data when using 
// Serial.readBytesUntil(), Serial.readBytes(), Serial.parseInt() or Serial.parseFloat(). It defaults to 1000 milliseconds.
	}

	this.write = function(valueToWrite) {
// Writes binary data to the serial port. This data is sent as a byte or series of bytes; 
// to send the characters representing the digits of a number use the print() function instead.
// val: a value to send as a single byte
// str: a string to send as a series of bytes

//returns number of bytes written
	}

	this.write = function(valueToWrite, len) {
// Writes binary data to the serial port. This data is sent as a byte or series of bytes; 
// to send the characters representing the digits of a number use the print() function instead.
// val: a value to send as a single byte
// str: a string to send as a series of bytes
// len: the length of the buffer

//returns number of bytes written
	}

	this.serialEvent = function() {
		//this one will be tricky
	}
}

// probably will skip stream

//probably will skip USB

/** EXAMPLE USAGE
// write('First message');
// delay(2000).then(function() { 
//     write('second message');
//     delay(2000).then(function() { write('Third message'); });
// });
**/

/*
We're going to need to sum all the delays in a program and then do a setInterval to loop
the loop function
*/

/* delay needs to be converted as so:
delay(time);

==>

delay(time).then(function(){
	//everything that comes after the delay
});

so Blink would look like 
function setup() {
	//do something
}

function loop(){
	digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
	delay(1000).then(funciton(){ // wait for a second
		digitalWrite(13, LOW); // turn the LED off by making the voltage LOW
		delay(1000).then(function(){// wait for a second
	  		//nothing
		})
  	});
}

setup(); //maybe we want setup to
setInteval(loop, 2000);              
      
a delay at the end of a piece of code can probably 

*/
/* How to implement a textbox evaluation
<input name="textbox" type="text" />

<input name="buttonExecute" onclick="execute(document.getElementsByName('textbox')[0].value)" type="button" value="Execute" />
*/