/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let exits = false;
    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) {
        exits = true;
        break;
      }
    }
    if (!exits) {
      result.push(nums[i]);
    }
  }
  return result;
};
const numbArr = [1, 2, 2, 3, 4, 4, 3, 2, 1];

const removeDuplicates2 = (nums) => {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    while (j < nums.length - 1 && nums[j] === nums[j + 1]) {
      j++;
    }
    nums[i] = nums[j];
    i++;
    j++;
  }
  return i;
};
console.log(removeDuplicates(numbArr));

// way 1
const uniq = [...new Set(numbArr)];

// way 2
const uniqueArray = numbArr.filter(function (item, pos, self) {
  return self.indexOf(item) === pos;
});

// way 3
function uniq_fast(nums) {
  let seen = {};
  let out = [];
  let len = nums.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    let item = nums[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

// way 4
const newArr5 = numbArr.filter(function (value, index) {
  return numbArr.indexOf(value) === index;
});
