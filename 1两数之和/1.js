/**
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function(nums, target) {
  // 定义数组存放索引
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(i + "-" + j);
      }
    }
  }
};
// 计算
var nums = [2, 7, 11, 15];
var target = 9;

// 计算脚本运行花费时间
console.time("time");
console.log(twoSum(nums, target));
console.timeEnd("time");
