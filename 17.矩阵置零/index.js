/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  // 新设置两个数组分别用来标记行与列。匹配到0就记录，再次循环替换为0即可
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
        console.log(matrix[i][j]);
      }
    }
  }
};
var setZeroes1 = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
    // 每行第一个如果有0就记录整个数组每行第一个都是0
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
    // 从1位开始循环，如果有0那么这行就都是0，这列也是0
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }
};
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes1(matrix);
