/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let dict = {}
    for (const num of nums) {
        dict[num] = (dict[num] || 0) + 1
    }
    for (const value of Object.values(dict)) {
        if (value % 2) {
            return false
        }
    }
    return true
};