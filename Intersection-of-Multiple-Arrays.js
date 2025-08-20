/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const dict = {}
    for (const num of nums.flat()) {
        dict[num] = (dict[num] || 0) + 1
    }
    const values = Object.entries(dict)
    const output = values.filter(x => x[1] === nums.length).map(x => Number(x[0]))
    return output
};