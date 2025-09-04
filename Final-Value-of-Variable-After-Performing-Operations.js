/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let counter = 0
    for(const operation of operations) {
        if (operation.includes('+')) counter++
        else counter--
    }
    return counter
};