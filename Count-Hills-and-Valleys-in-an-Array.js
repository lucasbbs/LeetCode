/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0
    const uniqueNumbers = []
    uniqueNumbers.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] !== nums[i]) {
            uniqueNumbers.push(nums[i])
        }
    }
    for (let i = 0; i < uniqueNumbers.length; i++) {
        if (uniqueNumbers[Math.max(i-1,0)] < uniqueNumbers[i] && uniqueNumbers[Math.min(i+1, uniqueNumbers.length - 1)] < uniqueNumbers[i]) {
            count++
        }
        if (uniqueNumbers[Math.max(i-1,0)] > uniqueNumbers[i] && uniqueNumbers[Math.min(i+1, uniqueNumbers.length - 1)] > uniqueNumbers[i]) {
            count++
        }
    }
    return count
};