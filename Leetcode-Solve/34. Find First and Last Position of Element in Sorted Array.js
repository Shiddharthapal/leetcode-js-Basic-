/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let first = 0;
  let last = nums.length;
  while (first <= last) {
    let mid = parseInt((first + last) / 2);
    if (nums[mid] === target) {
      let temp1 = -1;
      if (nums[mid + 1] === target) {
        let i = mid + 1;
        while (i) {
          if (nums[i] === target) {
            temp1 = i;
          } else {
            break;
          }
          i++;
        }
      }
      let temp2 = -1;
      if (nums[mid - 1] === target) {
        let i = mid - 1;
        while (i >= 0) {
          if (nums[i] === target) {
            temp2 = i;
          } else {
            break;
          }
          i--;
        }
      }
      let lastmid = null;
      if (temp1 === -1 && temp2 === -1) lastmid = mid;
      else if (temp1 > mid || temp2 < mid) {
        if (temp2 !== -1 && temp1 !== -1) {
          lastmid = temp2;
          mid = temp1;
        } else if (temp2 !== -1) {
          lastmid = temp2;
        } else {
          lastmid = temp1;
        }
      }
      if (lastmid > mid) return [mid, lastmid];
      else return [lastmid, mid];
    }
    if (nums[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return [-1, -1];
};

console.log(searchRange([8], 8));
