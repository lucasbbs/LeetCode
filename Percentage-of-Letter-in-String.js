/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;
    const length = s.length
    for (let i = 0; i < length; i++) {
        if (s[i] === letter) {
            count++
        }
    }
    return Math.floor((count/length)*100) 
};