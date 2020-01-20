/**
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function(nums, target) {
  // 数组长度小于2 返回-1
  if (nums.length < 2) return -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  // 计算后未找到匹配条件的返回-1
  return -1;
};

// 计算
var nums = [2, 7, 11, 15];
var target = 18;

// 计算脚本运行花费时间
console.time("time");
console.log(twoSum(nums, target));
console.timeEnd("time");
