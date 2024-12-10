import range from './range.js';

/**
 *
 * @param {number} rows - The size of the matrix. The default value is 4
 * @param {number} cols - The size of the matrix. If not provided, the matrix become square matrix
 */

export default function (rows, cols) {
  rows ??= 4;
  cols ??= rows;
  const result = [];
  let row = [];

  range(cols + 1, 1).forEach((el) => row.push(el));

  result.push(row);

  for (let x = 1; x < rows; x++) {
    const nextRow = row.map((el) => el + rows);
    row = nextRow;
    result.push(nextRow);
  }

  return result;
}
