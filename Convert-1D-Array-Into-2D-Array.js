/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    console.log(original.length, m * n)
    if (original.length !== m * n) return []
    const output = []
    let rowCounter = 0
    for (let i = 0; i <= original.length - 1; i++) {
        if(i%n === 0) {
            output.push([])
        }
        output[output.length - 1].push(original[i])
    }
    return output
};