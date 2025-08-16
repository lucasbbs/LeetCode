/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++){
        let isFulfilled = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) {
                isFulfilled = false
            }
        }
        if (isFulfilled) return i
    }
    return - 1
};