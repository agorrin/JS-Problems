/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
	str = str.split("");

	return str.sort((a,b) => 
		str.filter(v => v===a).length - str.filter(v => v===b).length
	).pop();

}

