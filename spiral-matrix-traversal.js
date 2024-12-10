import rotateMatrix from './rotate-matrix.js';

/**
 *
 * @param {number[][]} matrix - The 2D matrix
 * @returns {number[]} - The 1D matrix
 */

export default function (matrix) {
  const result = [];

  while (true) {
    if (!matrix.length) break;

    result.push(...matrix[0]);

    if (matrix[0].length == 1) {
      result.push(...matrix.slice(1).flatMap((el) => el));
      break;
    } else {
      matrix = rotateMatrix(matrix.slice(1));
    }
  }

  return result;
}
