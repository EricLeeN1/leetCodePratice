// 从第一位开始设置一个初始值0
// max = Math.max(max, sum) 保持最大值这个不难理解
// sum = Math.max(ele, sum + ele)
// 试想无负值的情况下sum  = $1 + $2 + $3等，sum一定大于0
// 如果有负值时 sum > 0继续加，sum + ele会增加，如果 sum <= 0时继续加，最大值会减小，此时sum + ele < ele,此时sum应该设置为ele

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (Array.isArray(nums) && nums.length) {
    let max = nums[0];
    let sum = 0;
    nums.forEach((ele) => {
      sum = Math.max(ele, sum + ele);
      max = Math.max(max, sum);
    });
    return max;
  }
  return 0;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
