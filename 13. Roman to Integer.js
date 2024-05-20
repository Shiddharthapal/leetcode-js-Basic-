/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map=new Map();
  map.set('I',1);
  map.set('V',5);
  map.set('X',10);
  map.set('L',50);
  map.set('C',100);
  map.set('D',500);
  map.set('M',1000);
  let sum=map.get(s[0]);
  let temp=0;
  for(let i=1;i<s.length;i++){
    temp=map.get(s[i]);
    if(map.get(s[i-1])<map.get(s[i])){
      temp=map.get(s[i]);
      temp-=(map.get(s[i-1]) * 2);
    }
    sum+=temp;
  }
  return sum;
}
console.log(romanToInt("III"));
