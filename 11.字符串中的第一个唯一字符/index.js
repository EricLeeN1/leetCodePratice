// 从前往后、从后往前各获取一次位置，有相等说明只有一个
// 默认处理-1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let index = -1;
  for (const char of s) {
    const i = s.indexOf(char);
    if (i === s.lastIndexOf(char)) {
      index = i;
      break;
    }
  }
  return index;
};

s = "loveleetcode";
console.log(firstUniqChar(s));
