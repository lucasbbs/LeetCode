/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let direction = "rightToLeft";
  const output = [];
  let index = 0;
  let row = 0;
  let col = 0;

  while (index < rows * cols) {
    output[index++] = matrix[row][col];
    matrix[row][col] = null;
    if (direction === "rightToLeft") {
      const nextCol = col + 1;
      if (nextCol < cols && matrix[row][nextCol] !== null) {
        col = nextCol;
      } else {
        direction = "upToBottom";
        row++;
      }
    } else if (direction === "upToBottom") {
      const nextRow = row + 1;
      if (nextRow < rows && matrix[nextRow][col] !== null) {
        row = nextRow;
      } else {
        direction = "leftToRight";
        col--;
      }
    } else if (direction === "leftToRight") {
      const nextCol = col - 1;
      if (nextCol >= 0 && matrix[row][nextCol] !== null) {
        col = nextCol;
      } else {
        direction = "bottomToUp";
        row--;
      }
    } else if (direction === "bottomToUp") {
      const nextRow = row - 1;
      if (nextRow >= 0 && matrix[nextRow][col] !== null) {
        row = nextRow;
      } else {
        direction = "rightToLeft";
        col++;
      }
    }
  }

  console.log(output);
  return output;
};