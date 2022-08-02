const assert = require('assert');
const maxProfit = require('../index');

it('Example 1:', () => {
  const profit = maxProfit([7,1,5,3,6,4]);

  assert.strictEqual(profit, 5);
});

it('Example 2:', () => {
  const profit = maxProfit([7,6,4,3,1]);

  assert.strictEqual(profit, 0);
});