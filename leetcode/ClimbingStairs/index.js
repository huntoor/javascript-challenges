/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, cache) {
  if (n === 0) return 1;

  if (n < 0) return 0;
  
  cache = cache || new Map();

  if (cache.get(n)) return cache.get(n);

  else {
    cache.set(n, climbStairs(n - 1, cache) + climbStairs(n - 2, cache));
    return cache.get(n);
  }
};

console.log(climbStairs(2));