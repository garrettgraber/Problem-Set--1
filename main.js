
//Number 1 (Capitalizes the first letter)
var letterCapitalize = function(inValue) {
	var stringArray = inValue.split(" ");
	var stringArrayLength = stringArray.length;
	var stringArrayCap = [];

	for (var i = 0; i < stringArrayLength; i++) {
		var word = stringArray[i];
		var wordLength = word.length;
		var firstLetterCap = word[0];
		firstLetterCap = firstLetterCap.toUpperCase();
		var restOfString = word.slice(1, wordLength);
		var newCapString = firstLetterCap + restOfString;
		stringArrayCap.push(newCapString);
		var outString = stringArrayCap.join(" ");
	}
	return outString;
};

window.letterCapitalize = letterCapitalize;

//Number 2 (counts words)
var wordCount = function(inValue) {
	console.log(inValue);
	var stringArray = inValue.split(" ");
	var numberWords = stringArray.length;
	return numberWords;
};

window.wordCount = wordCount;


//Number 3 (determines if a number is prime)
var primeTime = function(inValue) {

	if (inValue === 1) {
		return "Is not prime";
	}
	var primeSqrt = Math.sqrt(inValue);
	var primeFloor = Math.floor(primeSqrt);

	for ( var i = 2; i < primeFloor + 1; i++) {
		var resultingValue = inValue / i;
		var resultingValueFloor = Math.floor(resultingValue);

		if (resultingValue === resultingValueFloor) {
			return "Is not prime";
		}
	}
	return "Is prime";
};


var letterCapInValue = window.prompt("Enter the sentence you wish to capitalize: ", "");
var outString = letterCapitalize(letterCapInValue);
console.log("First letter of each word capitalized: " + outString);
alert("First letter of each word capitalized: " + outString);

var wordCountInValue = window.prompt("Count the number of words in a sentence: ", "");
var wordCountFinal = wordCount(wordCountInValue);
console.log("Number of words in the sentence: " + wordCountFinal);
alert("Number of words in the sentence: " + wordCountFinal);



window.primeTime = primeTime;


for ( var i = 1; i < 101; i++ ) {
	var resultPrimeTest = primeTime(i);
	console.log("Value = " + i + " ; Prime Status = " + resultPrimeTest);
}
