/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0, right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let currProf = prices[right] - prices[left];
      maxProfit = Math.max(currProf, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     let currProf = prices[j] - prices[i]
  //     maxProfit = Math.max(currProf, maxProfit);
  //   }
  // }
  return maxProfit;
};

module.exports = maxProfit;