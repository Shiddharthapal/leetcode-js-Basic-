/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length===1) return heights[0];
    let maxArea=0;
    let stack=[];
    heights.push(0);
    for(let i=0;i<heights.length;i++){
        while(stack.length && heights[stack[stack.length-1]]>heights[i]){
          let h= heights[stack.pop()];
          let leftPointer = stack.length ? stack[stack.length-1]:-1;
          let width= i-leftPointer-1;
          maxArea=Math.max(maxArea, h*width);
        }
        stack.push(i);
    }

    return maxArea;
    
};
console.log(largestRectangleArea([2,4]));