// var runningSum = function (nums) {
//   let res = [0];
//   nums.forEach((num, index) => {
//     res.push(num + res[index]);
//   })
//   res.shift();
//   return res;
// };

var runningSum = function (nums) {
  let curr = 0;
  let res = nums.map(num => {
    curr = num + curr;
    return curr;
  })
  return res;
};

console.log(runningSum([1, 2, 3, 4]));