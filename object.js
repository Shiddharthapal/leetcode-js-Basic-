let myobj={
    key1: 4,
    key2: 3,
    key3:{
        key4:5,
    },
}
let myobj2=new Object();
myobj2.key1=2;
myobj2.key2=3;
myobj2.key3={
    key4:4,
};
console.log(myobj.key1);
console.log(myobj["key1"]);
console.log(myobj.key3.key4);
console.log(myobj["key3"]["key4"]);

myobj.key2=5;
myobj["key2"]=5;
console.log(myobj.key2);

delete myobj.key1;

console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));

console.log(myobj.hasOwnProperty("key1"));
if("key1" in myobj) return true;

let myjoin=JSON.stringify(myobj);
console.log(myjoin);
let my=JSON.parse(myjoin);
console.log(my);

for(let key in myobj){
    console.log(key);
    console.log(myobj[key]);
}

let myobj={
    key1:2,
    key2:3,
    key3:{
        key4:5,
    },
}

let myobj2=new Object();
myobj2.key1=2,
myobj2.key2=4,
myobj2.key3={
    key4:6,
}

console.log(myobj.key1);
console.log(myobj["key1"]);
console.log(myobj.key3.key4);
console.log(myobj["key3"]["key4"]);

myobj.key2=5;
myobj["key2"]=5;
console.log(myobj.key2);

delete myobj.key1;

console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));

console.log(myobj.hasOwnProperty("key1"));
if("key1" in myobj) return true;

let mmobj=JSON.stringify(myobj);
console.log(mmobj);
let mm=JSON.parse(mmobj);
console.log(mm);

for(let key in myobj){
    console.log(key);
    console.log(myobj["key"])
}
//react component is a js function
const object={
    a:10,
    b:30,
    c:30,
};
//object di-struction(js object c te structure)
const {a,b,c}=object;
const myObj={
    x:40,
    y:50,
}
const {x,y}=myObj;
let e=myObj.x;
let f=myObj.y;

let array=[1,2,3,4,5,6];
const {o,p,q,r,s,t}=array;
let newArray=[...array];/*spread opreation
newArray te arrayer ekta copy create hoyssa.
fully new*/
let newarray=array//referance
