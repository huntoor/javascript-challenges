/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hashMap = new Map();
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  };

  for (let [_, count] of hashMap.entries()) {
    longest += Math.floor(count / 2) * 2;
    if (longest % 2 === 0 && count % 2 === 1) {
      longest += 1;
    }
  }
  return longest;
};

console.log(longestPalindrome("abccccdd"));