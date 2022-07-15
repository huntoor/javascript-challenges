// My solution
var countBits = function (n) {
  const binary = n.toString(2);
  return (binary.match(/1/g) || []).length;
};

// Celver Solution
// countBits = n => n.toString(2).split('0').join('').length;
