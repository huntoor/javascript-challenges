/**
 * @param {character[][]} grid
 * @return {number}
 */

var dfs = function (grid, i, j) {
  if (grid[i][j] === '1') {
    grid[i][j] = '0';
  } else {
    return;
  }

  if (i < grid.length - 1) {
    dfs(grid, i + 1, j);
  }

  if (j < grid[0].length - 1) {
    dfs(grid, i, j + 1);
  }

  if (i > 0 && i < grid.length) {
    dfs(grid, i - 1, j);
  }

  if (j > 0 && j < grid.length) {
    dfs(grid, i, j - 1);
  }
}

var numIslands = function (grid) {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++ ) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        dfs(grid, i, j);
      }
    }
  }

  return islandCount;
};