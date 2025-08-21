/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    num = String(num).split('').map(Number)
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] % 2 !== num[j] % 2) {
                continue
            }
            if (num[i] < num[j]) {
                temp = num[i]
                num[i] = num[j]
                num[j] = temp
            }
        }
    }
    return Number(num.map(String).join(''))
};