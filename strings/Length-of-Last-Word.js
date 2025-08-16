/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWord = ''
    let index = s.length - 1
    while (true) {
        if (s[index] !== ' ') {
            break;
        }
        index--
    }
    while (index >= 0) {
        if (s[index] === ' ') {
            break;
        }
        lastWord += s[index]
        index--
    }

    return lastWord.length

};

lengthOfLastWord("   fly me   to   the moon  ")
