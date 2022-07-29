var findMaxLength = function (nums) {
  const hashMap = new Map();
  hashMap.set(0, -1);
  let maxLen = 0, count = 0;
  nums.forEach((num, index) => {
    count += (num === 1? 1: -1);
    if (hashMap.has(count)) {
      maxLen = Math.max(maxLen, index - hashMap.get(count));
    } else {
      hashMap.set(count, index);
    }
  });
  return maxLen;
};
