// *
//  * Anagrams
//  *
//  * Return true of false depends on provided strings are anagrams of eachother.
//  * One string is an anagram of another if it uses the same characters
//  * in the same quantity. Only consider characters, not spaces
//  * or punctuation. Consider capital letters to be the same as lower case.
//  *
//  * Examples:
//  * anagrams('rail safety', 'fairy tales') === true
//  * anagrams('RAIL! SAFETY!', 'fairy tales') === true
//  * anagrams('Hi there', 'Bye there') === false
 

function anagrams(stringA, stringB) {
	stringA = stringA.split("").sort().filter(v=>v!=' ');
	stringB = stringB.split("").sort().filter(v=>v!=' ');
	
  	if (stringA.length === stringB.length && stringA.every((value, index) => value === stringB[index])) { 
  		return true
  	} else {
  		return false
  	}
}

