/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let greatestElement = [0, 0]
    const elements = new Map()
    for (const num of nums) {
        const currentCount = elements.get(num) || 0
        elements.set(num, (currentCount) + 1)
        if (greatestElement[1] < currentCount + 1) {
            greatestElement = [num, currentCount +1]
        }
    }
    return greatestElement[0]
};