"use strict"

var PI = Math.PI;
var E = Math.E;
var epm = new ErrorPropogationManager();

function detectMath() {
	var contents = $(equation).val();
	var eeg = new ErrorElementGenerator();
	eeg.clearAllElements(contents);
	epm.setEquationString(contents);
	var variables = epm.findAllVariables();
	if(!variables)
		return;

	eeg.createOneElementNoDelta(variables[0]);
	eeg.createAllVariableElements(variables[1]);
}

function doTheMath() {
	var contents = $(equation).val();
	epm.ensureAllElementsPresent();
	var elementsAndError = epm.collectElements();
	epm.executeMath();
}

function ErrorPropogationManager() {
	var equationString;

	//externally available functions
	this.findAllVariables = function() {
		if (!equationString)
			return;

		var eqProcessor = new EquationProcessor(equationString);
		return eqProcessor.getVariables();
	}

	this.getEquationString = function() {
		return equationString;
	}

	this.setEquationString = function(equation) {
		equationString = equation;
	}

	this.ensureAllElementsPresent = function(){
		
	}

	this.executeMath = function() {
		
	}

	this.collectElements = function() {
		//creates data structure for each variable found in the equation i.e. dict[var] = [varVal, deltaVal]
	}

	// internal only functions
	// element creation and deletion
}

function ErrorElementGenerator() {

	this.clearAllElements = function(equationString) {
		$(variableContainer).empty();
		if(!equationString)
			$(mathButton).hide();
	}

	this.createAllVariableElements = function(variableList) {
		if (!variableList)
			return;

		for (var i in variableList) {
			if(i == variableList.length - 1) 
				createVariablePair(variableList[i], true);
			else
				createVariablePair(variableList[i], false);
		}
		showMathButtonAndStartInterval(true);
	}

	this.createOneElementNoDelta = function(varName) {
		if(!varName)
			return;

		var element = '<div id="'+ varName + '">'+ varName +' <input type="text" class="expressionOutput"></input></div><br><br>';
		$(variableContainer).append(element);
	}

	function createVariablePair(varName, endOfVariables) { // add class "paired" to indicate that a variable and delta are paired
		var element = '<div id="'+ varName + '">'+ varName +' <input type="text" class="var"></input></div>';
		var deltaElement = '<div id="'+ varName +'Delta">&delta;'+ varName +' <input type="text" class="varDelta"></input></div>';
		if (!endOfVariables)
			deltaElement += '<br><br>'

		$(variableContainer).append(element + deltaElement);
	}

	function displayResult(result) {
		$(resultDiv).val("Error is: " + result);
	}

	function showMathButtonAndStartInterval() {
		$(mathButton).removeClass("hidden");
		//setInterval(100, )
	}

	this.collectElements = function() {
		var obj;
		$(variableContainer).children().each(function() {
			if ($(this).is("br"))
				return;

			obj[$(this).prop('id')] = {"value":$(this).children().val(), 
										"delta": del}; //TODO: replace del with delta for each var
		});
	}

	this.checkElements = function() {
		var obj;
		$(variableContainer).children().each(function() {
			if ($(this).prop('nodeName') != "BR")
				continue;

			obj[$(this).prop('id')] = {"value":$(this).children().val(), 
										"delta", del}; //TODO: replace del with delta for each var
		});
	}
}

function EquationProcessor(equation) {
	var eq = equation;
	var syntacticElements = ['=', '-', '/'];
	var numbericElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	var mathFunctions = ['ln(', 'log('];
	var mathConstants = ['E', 'PI'];

	//returns a list of variables for the equation
	this.getVariables = function() {
		var workingStr = equation;

		var leftHandVar = removeLeftHalf(workingStr);
		workingStr = workingStr.replace(leftHandVar, '')

		for (var i in mathFunctions){
			while(workingStr.indexOf(mathFunctions[i]) > 0) {
				workingStr = workingStr.replace(mathFunctions[i], ' ');
			}
		}

		workingStr = escapeRegExp(workingStr);
		workingStr = removeTheseElements(workingStr, syntacticElements);
		workingStr = removeTheseElements(workingStr, numbericElements);
		workingStr = removeAndNotifyRemoval(workingStr, mathConstants);

		var res = workingStr.split(" "); //split string into individual words
		res = processDuplicates(res);
		return [leftHandVar, res];
	}

	// character removal for variable isolation

	// This function removes the characters \ ^ $ * + ? . ( ) | { } [ ]
	// these are all considered special characters by javascript
	function escapeRegExp(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, " ");
	}

	function removeLeftHalf(workingStr) {
		var str = workingStr;
		var leftHandVar = str.slice(0, str.indexOf("=")-1);
		return leftHandVar;
		//for
	}

	function removeTheseElements(str, elementsToRemove) {
		var workingStr = str;
		for (var i in elementsToRemove)
			workingStr = workingStr.replace(new RegExp(elementsToRemove[i], 'g'), ' '); 

		return workingStr;
	}

	function removeAndNotifyRemoval(str, elementsToRemove, contents) { //TODO notify on removal of these elements
		var workingStr = removeTheseElements(str, elementsToRemove);
		return workingStr;
	}

	//removes duplicates from an array
	function removeDuplicates(arr) {
		arr = arr.filter (function (value, index, array) { 
			return array.indexOf(value) == index;
		});
		return arr;
	}

	function processDuplicates(arr, leftHandVar){
		while(arr.indexOf('') > -1) { //remove all empty strings from the list
			var index = arr.indexOf('');
			arr.splice(index, 1);
		}

		if (arr.indexOf(leftHandVar) > -1)
			arr.splice(arr.indexOf(leftHandVar), 1);

		return removeDuplicates(arr);
	}
}

function PropogationExecutor() {
	var variablesAndDeltas; //json of form {var:{value: val, delta: del}}

	function arithmeticError(arithmeticExpression) {
		var error;
		var variables = separateVariables(arithmeticExpression);
		var sum;
		for (var i in variables)
			sum += (variablesAndDeltas[variables[i]][1])^2;

		error = sqrt(sum)
		return error;
	}

	function geometricError(geometricExpression) {
		var error;
		var variables = separateVariables(geometricExpression);
		var sum;
		for (var i in variables)
			sum += (variablesAndDeltas[variables[i]][1]/variablesAndDeltas[variables[i]][0])^2;

		error = sqrt(sum) * evaluateExpression(geometricExpression);
		return error;
	}

	function logarithmicError(logarithmicInteriorExpression, callingFunction) {

		console.log("Not complete yet");
		return;

		var variables = getKeyVariables(logarithmicInteriorExpression, "ln"); //obj = {a{value:val, delta:del}}
		if (callingFunction == 'ln(') {
			error = variablesAndDeltas[logarithmicInteriorExpression][1]/variablesAndDeltas[logarithmicInteriorExpression][0];
			return error;
		}
		else if (callingFunction == 'log(') { //log(base, exp)
			Math.log();
		}
	}

	function exponentialError(exponentialExpression, callingFunction) {
		console.log("Not Complete Yet");
		return;

		var power = callingFunction;
		var keyVars = getKeyVariables(exponentialExpression, "exp"); //obj = {a:{value:val, delta:del}, y:{value:val} }
	}

	function setVariablesAndDeltas(objToSet) {
		variablesAndDeltas = objToSet;
	}

	function getVariablesAndDeltas() {
		return variablesAndDeltas;
	}


	function evaluateExpression() {

	}
}

function EquationAnalyzer() {
	var pe = new PropogationExecutor();

	function findFunctions(expression) {	
		var allowedFunctions = ['ln(', 'log('];
		// determine if function exists
		// find index
		// scan to end of function ')'
		// determine if more interior work needs to be executed
			//if yes, execute
			//if no, return error

			for (var i in allowedFunctions){
				var index = expression.indexOf(allowedFunctions[i])
				if (index < 0)
					continue;


			}

		}

		function findGroupings() {
			var groupingSymbols = ['(', '[', '{'];
			var matchingEndSymbol = [')', ']', '}'];

		}

		function findExponents() {
			var findExponentSymbols = ['^', '^('];

		}

		function findGeometric() {
			var geometricSymbols = ['*', '/'];

		}

		function findArithmetic() {
			var arithmeticSymbols = ['+', '-']

		}

		function recursiveCheck(expression) {
			var workingExp = expression;
			findFunctions(workingExp);
			findExponents(workingExp);
			findGeometric(workingExp);
			findArithmetic(workingExp);
		}
	}

