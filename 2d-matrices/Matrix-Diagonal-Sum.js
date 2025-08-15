/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sumDiagonals = 0
    let size = mat.length

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i === j) || (size - i -1 === j)) {
                sumDiagonals += mat[i][j]
            }
        }
    }

    return sumDiagonals;
};
