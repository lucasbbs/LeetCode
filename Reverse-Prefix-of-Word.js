/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let prefix = ''
    let index = -1
    for (let i = 0; i < word.length; i++) {
        prefix+=word[i]
        if (word[i] === ch) {
            index = i
            break
        }
    }
    let reversedPrefix = ''
    for (let i = prefix.length -1; i >= 0; i--) {
        reversedPrefix += prefix[i]
    }
    if (index !== -1) {
        return reversedPrefix + word.substring(index+1, word.length)
    } else {
        return word
    }
};