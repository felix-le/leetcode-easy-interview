/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     const newArr = nums.splice(nums.length - 1);
//     nums.unshift(newArr[0]);
//   }
// };
// const checkInput = [7, 1, 5, 3, 6, 4];
// rotate(checkInput, 3);

var rotate = function (nums, k) {
  let a = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    a[(i + k) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = a[i];
  }
  console.log('🚀 ~ file: 3.rotateArray.js ~ line 17 ~ rotate ~ a', a);
};
const checkInput = [1, 2, 3, 4, 5, 6, 7];
rotate(checkInput, 3);

// //splice
// var array = [1, 2, 3, 4, 5, 6];
// const spliceArr = array.splice(2);
// console.log(array.splice(2));

// //slice
// var array2 = [1, 2, 3, 4, 5];
// const newArr = array2.slice(2);
// console.log(array2.slice(2));

// console.log('----after-----');
// console.log('🚀 ~ file: 3.rotateArray.js ~ line 28 ~ spliceArr', spliceArr);
// console.log(array);
// console.log(array2);
