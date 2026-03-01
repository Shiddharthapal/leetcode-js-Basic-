/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s3.length != 0 && s1.length === 0 && s2.length === 0) return false;
  if (s2.length + s1.length !== s3.length) return false;
  //create 2D array to store the result (true/false),when later are same
  let temp = new Array(s1.length + 1)
    .fill(null)
    .map(() => new Array(s2.length + 1).fill(null));

  //recursive function that check two string later is same or not
  function back(s1_p, s2_p, s1, s2, s3) {
    //if index is equal to s2, s1 length then return true because those two string is correct then index going to be equal as length
    if (s1_p === s1.length && s2_p === s2.length) return true;

    if (temp[s1_p][s2_p] !== null) return temp[s1_p][s2_p];

    //check s1 and s3 have same latter and s1 index is under s1 length
    if (s1_p < s1.length && s1[s1_p] === s3[s1_p + s2_p]) {
      if (back(s1_p + 1, s2_p, s1, s2, s3)) return (temp[s1_p][s2_p] = true);
    }
    //check s2 and s3 have same latter and s2 index is under s2 length
    if (s2_p < s2.length && s2[s2_p] === s3[s1_p + s2_p]) {
      if (back(s1_p, s2_p + 1, s1, s2, s3)) return (temp[s1_p][s2_p] = true);
    }
    // every condition is done to execute then exacute this
    return (temp[s1_p][s2_p] = false);
  }
  return back(0, 0, s1, s2, s3);
};

console.log(isInterleave("", "", "a"));
