/**
* Is Even
*
* Determine if given number is even
* without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
* nor a conditional operator.
*
* Examples:
* isEven(4) === true
* isEven(3) === false
*/

function isEven(n) {
	if (n % 2 === 0) {
		return true
	} else {
		return false
	}
}
