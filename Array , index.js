// Array Creation
let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(10).fill(0);
let t = Array.isArray(arr); // return true or false

// Accessing Elements
let length = arr.length;
let first = arr[0];

// Looping
// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach loop
arr.forEach((element, index, array) => {
  console.log(element);
});

// Mapping
let mapped = arr2.map((value) => value >= 2); //map the array to another array

// Filtering
let filtered = arr2.filter((value) => value >= 2); // return new array with filtered elements


// Finding Elements
let found = arr.find((value) => value >= 2); // return first element
let has = arr2.contains(2); // return true or false

//Find index
let indexing = arr.findIndex((value) => value === 2); // return first element


// Reducing
let sum = arr2.reduce((accumulator, value) => accumulator + value, 0); // return a single values after calculation
/* 
accumulator means that store sum,by default value is 0
value means current index value
0 it is the starting index
*/

// Adding & Removing Elements
arr.push(6); // add to end
arr.pop(); // remove from end
arr.unshift(0); // add to beginning
arr.shift(); // remove from beginning

// Slicing & Splicing
let slice = arr.slice(0, 2); //cut 2 elements from 0 index & make a new array
arr.splice(0, 2); // modifies original


// Sorting
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending

let letters = ["a", "B", "c", "A"];
letters.sort((a, b) => a.localeCompare(b));

// Reversing array
let reversed = arr.reverse();

// s Concatenating two arrays
let concatenated = [...arr, ...arr2];

//to find a binary from a number
let binary = need.toString(2);

let bina_dig = "101";
// flip a binary
let flip_binary = bina_dig.replace(/[01]/g, (binary) =>
  binary === "0" ? "1" : "0",
);

//binary to decimal
let decimal = parseInt(bina_dig, 2);

//i want exact digit of binary number
let digit = 3;
let binary_number = need.toString(2).padStart(digit, "0");

//convert to string
let string = arr.toString();
let string2 = arr.join(" ");
let string3 = JSON.stringify(arr);

//comparing arrays
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5];
let isEqual = JSON.stringify(arr4) === JSON.stringify(arr5);

// ......veriables...

const v = 5; //can't change
let v2 = 5;
var v3 = 5;

//............................................function..........................................

//...............................name function
function greet(a, b) {}
//greet(1,2);

//...........................anonymous function
let multi = function (a, b) {};
// console.log(multi(3,4))

//...........................Built in funtion
//builtin function= written by js (inside)
//user define function = written by user
setTimeout(function () {
  console.log("This is a function");
}, 2000);

//..........................Array function..
//we can write array function in one or multiple line
const arrayFunction = (a, b) => a + b;

const arrayFunction2 = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

//..........................Templet variable..
let name = "God";
console.log(`Name=,${name}`);

//..............................Immediately Involed Function Expression (IIFE)..
(function () {
  console.log("Hello");
})();
//this function is no need to call, it call autometically

//..................................Generator function..
// it work step by step. when we need to work step by step then we can use this function

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let gen = generatorFunction();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//in this process lazy loading work like when we go to a application then we
// see that all content comes not together. content comes one by one serialwise

//..................................recursive function..
function greet(n) {
  if (n === 0) return;
  console.log("number=>", n);
  greet(n--);
}


//truthy & falsy value
let link =
  "https://itzone.com.vn/en/article/what-are-truthy-and-falsy-in-javascript/";

//..........................................ARRAY................................................
//set
let set = new Set(arr);
let primeNumber = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
set.add(6);
set.delete(6);
set.has(6); //return boolean if set has 6
set.size; //return size of set
let concat = new [...arr, ...arr2](); //concatination of set

//...............................map..................................
//create a map
let map = new Map();

//set value into map
map.set("5", "fasdfasd");

//get value from map
map.get("5"); //return fasdfasd

//check value is staying or has into the map
let hasInmap = map.has("5"); // true / false

//delete any key from map
map.delete("5");
console.log(map);

//fully clear the map
map.clear();

//findout the size of the map
let map_size=map.size();

//create a array
let need = [index, value];
let map1 = new Map();
map.set(key, need);
let ret = map.get(key); //key=need[index,value]
let val = ret[1];
let index = ret[0];
let z;
value.length > val ? (z = index) : (z = value);
