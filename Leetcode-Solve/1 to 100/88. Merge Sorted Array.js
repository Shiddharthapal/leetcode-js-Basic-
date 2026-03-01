/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n===0) return nums1;

    let numberOfZero=nums1.length- m;
    
    for(let i=0;i<numberOfZero;i++){
        nums1.pop();
       
    }
    if(m===0){
        for(let i=0;i<n;i++){
            nums1.push(nums2[i]);
        }
        return nums1;
    }

    let firstArPointer=0;
    let secondArrPointer=0;

    while(firstArPointer<=nums1.length && secondArrPointer<nums2.length){
        if(nums1[firstArPointer]>=nums2[secondArrPointer]){
            nums1.splice(firstArPointer,0,nums2[secondArrPointer]);
            secondArrPointer++;
            firstArPointer++;
            continue;
        }

        if( (firstArPointer===nums1.length && secondArrPointer<nums2.length)){
            nums1.push(nums2[secondArrPointer]);
            secondArrPointer++;
            firstArPointer++;
        }else if( nums1[firstArPointer]<nums2[secondArrPointer]){
            firstArPointer++;
        }
    }
    return nums1;
};

console.log(merge([0], 0, [1], 1)); 


// let j=0;
    // for(let i=0;i<n;i++){
    //     let tempDigit=nums2[i];
    //     console.log("tempDigit ==> ", tempDigit);

    //     while(j>=0){
    //         if(j===0){
    //             if(nums1[j+1]>tempDigit){
    //                 nums1.splice(j,0,tempDigit);
    //                 break;
    //             }else{
    //                 j++;
    //             }
    //         }else if(j>=nums1.length-1){
    //             if(nums1[j-1]<=tempDigit){
    //             console.log("tempDigit 2==> ", tempDigit);
    //                nums1.push(tempDigit);
    //                j++;
    //                 break;
    //             }
    //         }else{
    //               if(nums1[j+1]>=tempDigit && nums1[j-1]<=tempDigit){
    //                 nums1.splice(j,0,tempDigit);
    //                 break;
    //             }else{
    //                 j++;
    //             }
    //         }
    //     }
    // }
