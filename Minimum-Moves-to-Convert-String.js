/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let index = 0
    let count = 0
    while(s.includes('X')) {
        console.log((s.substring(index, index+3)))
        if (s[index] === 'X' && s.substring(index, index+3).includes('X')) {
            count++
            index += 3
        } else {
            index++
        }
        if (index > s.length) break
    }
    return count
};