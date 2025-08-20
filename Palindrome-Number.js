/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = String(x)

    let alphaNumericString = '';
    for(let i = 0; i < string.length; i++) {
            alphaNumericString += (string[i])
    }

    const halfOfWord = Math.ceil(alphaNumericString.length/2)
    for (let i = 0; i < halfOfWord; i++) {
        if(alphaNumericString[i] !== alphaNumericString[alphaNumericString.length-1 - i]) {
            return false
        }
    }
    return true

};