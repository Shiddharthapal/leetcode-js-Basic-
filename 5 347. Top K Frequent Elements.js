/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map=new Map()
    nums.forEach((value)=>{
        if(!map.has(value))
            map.set(value,1)
        else
            map.set(value,map.get(value)+1)
    })

    let a=[]
    map.forEach((value,index)=>{
        let need=[value,index]
        a.push(need)
    })
    a.sort((a,b)=> b[0]-a[0])
    let result=[]
    for(let i=0;i<k;i++){
        result.push(a[i][1])
    }
    return result
};
console.log(topKFrequent([1,1,1,2,3,2,4,3,3,4,4],3))
