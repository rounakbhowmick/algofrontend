var twoSum = function (nums, target) {
  let data = {};
  for (let i = 0; i < nums.length; i++) {
    if (!data.hasOwnProperty(nums[i])) {
      data[target - nums[i]] = i;
    } else {
      return [data[nums[i]], i];
    }
  }
};
