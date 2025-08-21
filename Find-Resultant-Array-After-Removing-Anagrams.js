/**
 * @param {string[]} words
 * @return {string[]}
 */

const generateAnagram = (word) => word.split('').sort().join('')

var removeAnagrams = function(words) {
    const output = []
    let previous = ''
    for(let i = 0; i < words.length; i++) {
        if (generateAnagram(words[i]) !== previous) {
            output.push(words[i])
        }
        previous = generateAnagram(words[i])
    }
    return output
};