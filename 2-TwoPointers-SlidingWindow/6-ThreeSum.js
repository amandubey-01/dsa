/* 
Three-sum - https://leetcode.com/problems/3sum/description/
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

var threeSum = function(nums) {
    nums.sort((a,b) => a -b);
    const res = []

    for (let i = 0; i < nums.length - 2 ; i++){
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i-1]) continue // skips duplicate i
        let s = i + 1;
        let e = nums.length - 1;
        const t = -nums[i];

        while( s < e){
            const sum = nums[s] + nums[e];
            if(sum < t) s++;
            else if (sum > t) e--;
            else {
                res.push([nums[i],nums[s],nums[e]]);
                s++;
                e--;
                while (s < e && nums[e] == nums[e + 1]) e--; // skip duplicate e
                while (s < e && nums[s] == nums[s - 1]) s++; // skip duplicate s
            }
        }
    }
    return res;
}; 
// Time complexity : sorting - o(nlogn), looping o(n^2) so o(n^2);
// space complexity is o(1)