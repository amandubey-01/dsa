/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/
// Observation:
/*
There are two sorted array's one from index 0 to min_index-1 and other from min_index to n-1. Our purpose is to find 
min_index.
Middle element lies either in fist sorted array or in the second sorted array.
if nums[mid] > nums[r] --> Implies mid lies in 0 to min_index-1. And thus l = mid + 1.
else nums[mid] <= nums[r] ---> Implies mid lies in min_index to n-1. And r = mid, we can neglect anything to
the right of mid.
*/
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        const mid = Math.floor(( l + r ) / 2);
        if (nums[mid] > nums[r]){
            l = mid + 1;
        }
        else{
            r = mid
        }
    }
    return nums[l]
};