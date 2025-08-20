/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0
    let res = 0
    const elements = new Map()
    let temp = 0
    for (const num of nums) {
        const currentCount = elements.get(num) || 0
        temp = currentCount +1
        elements.set(num, temp)
        if (res < temp) {
            majority = num
            res = temp
        }
    }
    return majority
};