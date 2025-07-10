let arr = [1, 2, 3, 4, 5, 6];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(10).fill(0);

let a = Array.isArray(arr);
console.log(a);

let length = arr.length;
console.log(length);

let first = arr[0];
console.log(first);

let c = [];
for (let i = 0; i < arr.length; i++) {
  c.push(arr[i]);
}
console.log(c);
let d = [];
arr.forEach((value, index, array) => {
  d.push(value);
});
console.log(d);

let mapping = arr.map((value) => {
  return value >= 2;
});
console.log(mapping);

let filter = arr2.filter((value) => {
  return value >= 2;
});
console.log(filter);

arr.push(6);
arr.pop();
arr.unshift(0);
arr.shift();

console.log("arr=>", arr);
let sclice = arr.slice(1, 4);
console.log("slice", sclice);
let x = arr.splice(0, 2);
console.log(x);

let find = arr2.find((value) => {
  return value >= 2;
});
console.log(find);
let has = arr.includes(3);
console.log(has);

let e = arr.sort((a, b) => {
  return b - a;
});
console.log(e);
let f = arr2.sort((a, b) => {
  return a - b;
});
console.log(f);

let reverse = arr.reverse();
console.log(reverse);
let con = [arr, arr2];
console.log(con);

let string = arr.toString();
console.log(string);
let string2 = arr.join(" ");
console.log(string2);
let string3 = JSON.stringify(arr2);
console.log(string3);

let arr4 = [1, 2, 3, 4];
let arr5 = [1, 2, 3, 4];
console.log(JSON.stringify(arr4) === JSON.stringify(arr5));

//startsWith(word)
const str = "Helloworld!";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("world")); // Output: false

let array = [1, 2, 2, 3, 3, 4, 5];

//covert the array to the set(for removing the duplicate)
let set = new Set(array);

//convert the set to the array
let array2 = [...set]; /*  "..." means make a copy of the element*/
