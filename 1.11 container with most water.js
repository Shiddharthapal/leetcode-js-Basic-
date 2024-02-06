/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=0,area
    let first_p=0
    let last_p=height.length-1
    while(first_p<=last_p){
        area=Math.min(height[first_p],height[last_p])*(last_p-first_p)
        max=area>max?area:max
        height[first_p]>height[last_p]?
            last_p--:first_p++
    }
    return max
    
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
