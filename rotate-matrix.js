export { rotateLeft, rotateRight };

/**
 *
 * @param {number[][]} arr - The 2D matrix
 * @returns {number[][]} - Left rotated 2D matrix
 */

function rotateLeft(arr) {
  return arr[0].length == 1
    ? [arr.flatMap((el) => el)]
    : [
        arr.flatMap((el) => el.slice(-1)),
        ...rotateLeft(arr.map((el) => el.slice(0, -1))),
      ];
}

/**
 *
 * @param {number[][]} arr - The 2D matrix
 * @returns {number[][]} - Right rotated 2D matrix
 */

function rotateRight(arr) {
  return arr[0].length == 1
    ? [arr.flatMap((el) => el).reverse()]
    : [
        arr.map((el) => el[0]).reverse(),
        ...rotateRight(arr.map((el) => el.slice(1))),
      ];
}
