import { rotateLeft } from './rotate-matrix.js';

/**
 *
 * @param {number[][]} matrix - The 2D matrix
 * @returns {number[]} - The 1D matrix
 */

export default function spiralMatrixTraversal(matrix) {
  return matrix.length > 1
    ? [...matrix[0], ...spiralMatrixTraversal(rotateLeft(matrix.slice(1)))]
    : [...matrix[0]];
}
