/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let output = -Infinity
    let temp = 0
    numbers = number.split('').map(Number)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != digit ) {
            continue
        }
        temp = numbers.toSpliced(i, 1).map(String).join('')
        if (temp > output) {
            output = temp
        }
    }
    return output
};