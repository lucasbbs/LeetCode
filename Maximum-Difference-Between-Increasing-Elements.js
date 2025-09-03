/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1;
    let pointer1 = 0;
    let pointer2 = 1;
    
    while (pointer2 <= nums.length - 1) {
        if (nums[pointer1] < nums[pointer2]) {
            res = (nums[pointer2] - nums[pointer1]) > res 
                ? nums[pointer2] - nums[pointer1] 
                : res;
        } else {
            pointer1 = pointer2;
        }
        pointer2++;
    }
    return res;
};