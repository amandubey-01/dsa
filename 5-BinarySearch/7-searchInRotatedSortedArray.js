/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

// In two binary search
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let min_index
    while(l < r){
        const mid = Math.floor((l + r) / 2);

        if(nums[mid] > nums[r]){
            l  = mid + 1
        }
        else{
            r = mid
        }

    }
    min_index = l;

    if(min_index === 0){
        l = 0;
        r = nums.length - 1;
    }
    else if(nums[0] <= target && target <= nums[min_index - 1] ){
        l = 0;
        r = min_index - 1;
    }
    else{
        l = min_index;
        r = nums.length - 1;
    }

    while(l <= r){
        const mid = Math.floor((l+r) / 2)
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] > target){
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    return -1
};

// In one binary search
var search = function(nums, target) {
     let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {

            // Target lies inside left sorted half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else {
            // Right half must be sorted

            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
