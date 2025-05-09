/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map=new Map()
   strs.forEach((value)=>{
    let str=toString(value)
    if(!map.has(str))
        map.set(str,[value])
    else
        map.set(str,[...map.get(str),value])
   })
   let a=[]
   map.forEach((value)=>{
    a.push(value)
   })
   return a

}
var toString=function(x){
    let arr=new Array(224).fill(0)
    for(let i=0;i<x.length;i++){
        let asci=x[i].charCodeAt(0)
        arr[asci]?arr[asci]+=1:arr[asci]=1
    }
    return JSON.stringify(arr)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))