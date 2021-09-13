/**
 * @param {number[][]} mat
 * @param {number} r 重构的矩阵的行数
 * @param {number} c 重构的矩阵的列数
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // 如果拉平长度大于r*c则可以使用;
  // 否则返回元数据
  // let mat1 = JSON.parse(JSON.stringify(mat)).flat();
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }
  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  // 制作一个期望格式的数组，值都初始为 r*c
  console.log(ans);
  for (let x = 0; x < m * n; ++x) {
    // x / n 之前的第几行， x % n 之前的第几列
    // x / c 现在的第几行， x % c 现在的第几列
    ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
  }
  return ans;
};

const mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;
console.log(matrixReshape(mat, r, c));
// [ [ 1, 2, 3, 4 ] ]
