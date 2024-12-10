/**
 *
 * @param {number} end - The end point of the range (It is not included). 10 is the default value
 * @param {number} start - The start point of the range. 0 is the deafault value
 * @param {number} d - The difference between them. 1 is the default value
 * @returns {number[]} - The array numbers from start to the end, with d as difference.
 */

export default function (end, start, d) {
  const result = [];
  start ??= 0;
  end ??= 10;
  d ??= 1;

  for (let x = start; x < end; x += d) {
    result.push(x);
  }

  return result;
}
