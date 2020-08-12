/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var count = 0;
    var n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[i - count] = nums[i]
        } else {
            count++;
        }
    }
    return n - count;
};

removeDuplicates([1, 1, 2])