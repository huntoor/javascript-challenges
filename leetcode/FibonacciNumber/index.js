// /**
//  * @param {number} n
//  * @return {number}
//  */
//  var fib = function(n, cache = {}) {
//   if (n < 2) {
//     return n;
//   }

//   if (cache[n]) return cache[n];

//   else {
//     cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
//     return cache[n];
//   }
// };



// Another Solution
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, cache) {
  cache = cache || new Map();
  if (n < 2) {
    return n;
  }

  if (cache.get(n)) return cache.get(n);

  else {
    cache.set(n, fib(n - 1, cache) + fib(n - 2, cache));
    return cache.get(n);
  }
};

