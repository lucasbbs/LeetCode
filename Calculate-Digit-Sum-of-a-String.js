/**
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
var digitSum = function(str, k) {
    let segments = []
    while (true) {
        if (str.length <= k) break
        for (let i = 0; i < str.length; i += k) {
            segments.push(str.slice(i, i + k));
        }
        const sums = segments.map(x => x.split('').map(Number).reduce((curr, acc) => acc += curr, 0))
        str = sums.join('')
        segments = []
    }
    return str
};