/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let numbers = []
    let temp = ''
    for (let i = 0; i < s.length; i++) {
        if(!isNaN(s[i]) && s[i] !== ' ') {
            temp += s[i]
        } else if (temp.length !== 0) {
            numbers.push(parseInt(temp, 10))
            temp = ''
        }
    }
    if (temp.length > 0) {
        numbers.push(parseInt(temp, 10));
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i+1]) {
            return false
        }
    }
    return true
};