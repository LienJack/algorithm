/* 
  给定一个整数 n，返回 n! 结果尾数中零的数量。

  示例 1:
  输入: 3
  输出: 0
  解释: 3! = 6, 尾数中没有零。

  示例 2:
  输入: 5
  输出: 1
  解释: 5! = 120, 尾数中有 1 个零.
  说明: 你算法的时间复杂度应为 O(log n) 。
*/
/**
 * @param {number} n
 * @return {number}
 */
// 2 * 5 才能产生 0，所以找出2和5的因子数，又2的个数比5的多，所以只要找出5的个数就可以了
// 例如25的阶乘，包含5的有5、15、20、25，其中总共有5个5。也就是n不断的除以5的商的和
var trailingZeroes = function(n) {
  let res = 0;
  while(n >= 5) {
    res += parseInt( n / 5);
    n = parseInt(n / 5);
  }
  return res;
};