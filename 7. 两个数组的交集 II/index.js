/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  console.log(nums1, nums2);
  const maxArr = nums1.length >= nums2.length ? nums1 : nums2;
  const minArr = nums1.length < nums2.length ? nums1 : nums2;
  let resArr = [];
  for (let i = 0; i < minArr.length; i++) {
    let maxIndex = maxArr.indexOf(minArr[i]);
    if (maxIndex != -1) {
      resArr.push(maxArr.splice(maxIndex, 1)[0]);
    }
  }
  return resArr;
};
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
