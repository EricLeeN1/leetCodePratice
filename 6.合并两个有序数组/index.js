const sort = function (a, b) {
  return a - b;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 非0情况下，splice裁掉m以后的情况，等于0的时候直接为空数组
  // nums1.splice(m, n)
  // nums1 = nums1.concat(n > 0 ? nums2 : []);

  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
