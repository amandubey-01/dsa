// Container With most water - https://leetcode.com/problems/3sum/description/
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 

*/ 

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;  // Use let, not const

    while (left < right) {
        // Calculate current area
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;

        // Update maxArea if current is larger
        if (area > maxArea) {
            maxArea = area;
        }

        // Move the pointer at the SHORTER line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

/*
Time commplexity - O(n)
Space Comlexity - O(1) ----> Need no extra space.
*/

// Description
/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 

*/