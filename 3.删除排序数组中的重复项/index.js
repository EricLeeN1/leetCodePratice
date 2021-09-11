/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  console.log([...new Set(nums)]);
  return new Set(nums).size;
};

const arr = [1, 1, 2];
console.log(removeDuplicates(arr));
