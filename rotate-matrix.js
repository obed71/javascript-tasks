/**
 *
 * @param {number[][]} matrix - The 2D matrix
 * @param {boolean} clockwise - State true or false. The defaul value is true
 * @returns {number[][]} - Rotated 2D matrix
 */

export default function (matrix, clockwise) {
  const matrix_ = matrix ?? [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  const clockwise_ = clockwise ?? true;

  const numberOfColumns = matrix_[0].length;
  const lastColumnIndex = numberOfColumns - 1;
  const lastRowIndex = matrix_.length - 1;
  const rotatedMatrix = [];

  if (!clockwise_) {
    for (let y = 0; y < numberOfColumns; y++) {
      const childMatrix = [];

      for (let x = lastRowIndex; x >= 0; x--) {
        childMatrix.push(matrix_[x][y]);
      }

      rotatedMatrix.push(childMatrix);
    }

    return rotatedMatrix;
  }

  for (let y = lastColumnIndex; y >= 0; y--) {
    const childMatrix = [];

    for (let x = 0; x <= lastRowIndex; x++) {
      childMatrix.push(matrix_[x][y]);
    }

    rotatedMatrix.push(childMatrix);
  }

  return rotatedMatrix;
}
