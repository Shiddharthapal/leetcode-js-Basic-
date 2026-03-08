/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let n = nums[0].length;
  let number = 1 << n;
  for (let i = 0; i < number; i++) {
    //here i create the binary number with exact number of digit that feels using "0"
    let binary =i.toString(2).padStart(n,"0");
    if(!nums.includes(binary)){
        return binary;
    }
  }
};

console.log(findDifferentBinaryString(["111","011","001"]));
