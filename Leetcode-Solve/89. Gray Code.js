/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let totalNumberOfDigit= 1<<n;
    let resultArray=[];

    for(let i=0;i<totalNumberOfDigit;i++){
        resultArray.push(i^(i>>1));
    }
    return resultArray;
    
};

console.log(grayCode(2));


// function add3Bit(a, b) {
//   // convert binary strings to numbers
//   const sum = parseInt(a, 2) + parseInt(b, 2);
//   console.log("parseInt(a, 2) ==> ", parseInt(a, 2));
//   console.log("sum ==> ", sum);

//   // keep only 3 bits (mask with 111)
//   const result = sum & 0b111;

//   return result.toString(2).padStart(3, "0");
// }

// console.log(add3Bit("101", "011"));
// { result: "000", carry: 1 }
