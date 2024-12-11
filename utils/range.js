/**
 *
 * @param {number} end - The end point of the range (It is not included)
 * @param {number} start - The start point of the range. 0 is the deafault value
 * @param {number} d - The difference between them. 1 is the default value
 * @returns {number[]} - The array numbers from start to the end, with d as difference.
 */

export default function range(end, start, d) {
  return start < end
    ? [start ?? 0, ...range(end, (start ?? 0) + (d ?? 1), d ?? 1)]
    : [];
}
