import sampleMatrix from './utils/sample-matrix.js';

/**
 *
 * @param {number[][]} matrix - The 2D matrix
 * @param {boolean} clockwise - State true or false. The defaul value is true
 * @returns {number[][]} - Rotated 2D matrix
 */

export default function (matrix, clockwise) {
  matrix ??= sampleMatrix(3, 4);
  clockwise ??= true;

  const numberOfColumns = matrix[0].length;
  const lastColumnIndex = numberOfColumns - 1;
  const lastRowIndex = matrix.length - 1;
  const rotatedMatrix = [];

  if (!clockwise) {
    for (let y = 0; y < numberOfColumns; y++) {
      const childMatrix = [];

      for (let x = lastRowIndex; x >= 0; x--) {
        childMatrix.push(matrix[x][y]);
      }

      rotatedMatrix.push(childMatrix);
    }

    return rotatedMatrix;
  }

  for (let y = lastColumnIndex; y >= 0; y--) {
    const childMatrix = [];

    for (let x = 0; x <= lastRowIndex; x++) {
      childMatrix.push(matrix[x][y]);
    }

    rotatedMatrix.push(childMatrix);
  }

  return rotatedMatrix;
}
