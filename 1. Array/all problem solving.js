/**
 * @param {number[]} nums
 * @param {string[]} a
 * @param {string[]} b 
 * @param {string[]} c
 * @param {number} k
 * @param {number} n 
 * @param {number} m
 * @return {string[]}
 */
/*var toString=function(k,nums){
    nums.sort((a,b)=> b-a)
    let count=0
    if(k===0) return 0
    nums.forEach((value)=>{
        if(k>0){
            k=k-value
            count++
        }
    })
    if(k>0) return -1
    else return count
}
console.log(toString(12,[1,1,1,1,4,2,5,2,4,1,1,1]))
*/
var toSolve=function(n,m,a,c){
    let map=new Map()
    a.forEach((value)=>{
        let l=value[1].length
        let need=[l,value[1]]
        map.set(value[0],need)
    })
    let arr=[]
    c.forEach((value)=>{
        let ret=map.get(value)
        let x=ret[0]
        let y=ret[1]
        let z
        value.length>x?z=y:z=value
        arr.push(z)
    })
    return arr

}
console.log(toSolve(5,3,
    [["joll","wuqrd"],
    ["euzf","un"],
    ["hbnyiyc","rsoqqveh"]],
    ["hbnyiyc","joll","joll","euzf","joll"]))
