/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip 
at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length


*/

var longestOnes = function(nums, k) {
    let s = 0;
    let e = 0;
    const n = nums.length;
    let count0 = 0;
    let maxLen = 0;

    while (e<n){

        //update condition
        if(nums[e] == 0){
            count0++
        }

        // Ensure the window is valid.
        while(count0 >k && s <= e){
            if(nums[s] == 0){
                count0--;
            }
            s++;
        }
        
        // Taking the current answer
        const curLen = e - s + 1;
        maxLen = Math.max(maxLen, curLen);
        e++;
    }
    return maxLen;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
