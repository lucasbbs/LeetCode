/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let leastDifference = Infinity;
    let n = 0
    for (let i = 0; i < nums.length; i++) {
        if (leastDifference > Math.abs(nums[i])) {
            leastDifference = Math.abs(nums[i])
            n = nums[i]
        } else if (n < nums[i] && leastDifference === Math.abs(nums[i])) {
            n = nums[i]
        }
    }
    return n
};