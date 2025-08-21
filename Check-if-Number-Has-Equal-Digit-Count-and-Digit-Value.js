/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const dict = {}
    for (let i = 0; i < num.length; i++) {
        dict[num[i]] = (dict[num[i]] || 0) + 1
    }
    for (let n of Object.entries(num)) {
        if (dict[n[0]] ===  undefined && n[1] === '0') continue
        if (dict[n[0]] !== Number(n[1])) {
            return false
        }
    }
    return true
};