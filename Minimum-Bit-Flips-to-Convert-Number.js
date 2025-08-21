/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    xor_result = start ^ goal
    let count = 0
    while(xor_result){
        count += xor_result & 1;
        xor_result >>= 1;
    }
    return count
};