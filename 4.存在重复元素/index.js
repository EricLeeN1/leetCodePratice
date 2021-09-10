// 解决方案
// 1、es6-Set去重获取长度
// 2、不存在大于原来数组长度的情况
// 3、等于说明无重复，小于肯定有重复元素

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const arr = new Set(nums).size
  return arr !== nums.length;
};

let arr = [1,2,3,1]

console.log(containsDuplicate(arr));