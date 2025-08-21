/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let output = -Infinity
    for (let i = 0; i < num.length - 2; i++) {
        if ((num[i]===num[i+1]) && (num[i+1] === num[i+2])) {
            let sliced = num.slice(i,i+3)
            if (output < Number(sliced)) {
                output = sliced
            }
        }
    }
    return output !== -Infinity ? String(output) : ''
};