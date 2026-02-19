/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let length_s = s.length;
  let length_t = t.length;

  let dp_array = new Array(length_t + 1).fill(0);
  // by default i can make "" this empty string in one way. every string have "". so dp_array[0]=1
  dp_array[0] = 1;

  for (let i = 1; i <= length_s; i++) {
    for (let j = length_t; j >= 1; j--) {
      /* if the alphabet is not matched then move to the next alphabet. if matched then
            calculate the ways to make the string
            */
      if (s[i - 1] === t[j - 1]) {
        /**
                  here add the way to make the 0 to j-1 index (dp_array[j-1]) string with previous ways to make the
                  string from 0 to j (dp_array[j]) index. when i add this then found the result  to make new string o to j 
                    ways or combination (like i can make this string with different number of way)
                 */
        dp_array[j] = dp_array[j - 1] + dp_array[j];
      }
    }
  }
  return dp_array[length_t];
};

console.log(numDistinct("rabbbit", "rabbit"));
