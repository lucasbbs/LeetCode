/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphaNumericString = '';
    for(let i = 0; i < s.length; i++) {
        if ((s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) || (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91)  || (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123)) {
            alphaNumericString += (s[i]).toLowerCase()
        }
    }

    const halfOfWord = Math.ceil(alphaNumericString.length/2)
    for (let i = 0; i < halfOfWord; i++) {
        if(alphaNumericString[i] !== alphaNumericString[alphaNumericString.length-1 - i]) {
            return false
        }
    }
    return true
};
