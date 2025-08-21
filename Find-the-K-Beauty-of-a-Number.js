/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let string = String(num)
    let numberOfDivisors = 0
    for(let i = 0; i < string.length - k + 1; i++){
        if (num % Number(string.substring(i, i+k)) === 0) {
            numberOfDivisors++
        }
    }
    return numberOfDivisors
};