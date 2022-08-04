/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const halfway = Math.floor(nums.length / 2);
  if (target === nums[halfway]) return halfway;
  else if (target > nums[halfway]) {
    for (let i = halfway; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
  } else {
    for (let i = 0; i < halfway; i++) {
      if (nums[i] === target) return i;
    }
  }
  return -1;
};

// Another Solution 
var search = function (nums, target) {
  let pivot, left = 0, right = nums.length;

  while (left <= right) {
    pivot = Math.floor(left + ( right - left ) / 2);
    if (nums[pivot] === target) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    else left =  pivot + 1;
  }
  return -1;
}

// console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1, 0, 5], 5));