/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    const greatestColumnValue = [];
    const valuesToReplace = [];
    
    for (let col = 0; col < cols; col++) {
        let max = 0;
        valuesToReplace[col] = [];
        for (let row = 0; row < rows; row++) {
            if (max < matrix[row][col]) {
                max = matrix[row][col];
            }
            if (matrix[row][col] === -1) {
                valuesToReplace[col].push([row, col]);
            }
        }
        greatestColumnValue.push(max);
    }

    for (let col = 0; col < cols; col++) {
        const value = valuesToReplace[col];
        for (let j = 0; j < value.length; j++) {
            const r = value[j][0], c = value[j][1];
            matrix[r][c] = greatestColumnValue[col];
        }
    }
    return matrix;
};
