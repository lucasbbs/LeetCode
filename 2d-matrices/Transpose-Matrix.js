/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    const output = [];
    for (let i = 0; i < cols; i++) {
        output[i] = [];
        for (let j = 0; j < rows; j++) {
            output[i][j] = matrix[j][i];
        }
    }
    console.log(output)
    return output
};


