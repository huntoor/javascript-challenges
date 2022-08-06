/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, prevColor = image[sr][sc]) {
  const m = image.length;
  const n = image[0].length;

  if (sr < 0 || sc < 0 || sr >= m || sc >= n || image[sr][sc] !== prevColor || image[sr][sc] === color) {
    return image;
  }

  image[sr][sc] = color;

  floodFill(image, sr + 1, sc, color, prevColor);
  floodFill(image, sr - 1, sc, color, prevColor);
  floodFill(image, sr, sc + 1, color, prevColor);
  floodFill(image, sr, sc - 1, color, prevColor);

  return image;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));