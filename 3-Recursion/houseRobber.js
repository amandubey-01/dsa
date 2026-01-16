// max money --> i.....nums.length - 1;
// function helper(nums, i){
//     if (i >= nums.length) return 0;

//     const rob = nums[i] + helper(nums, i + 2);
//     const skip = helper(nums, i + 1);

//     return Math.max(rob,skip);
// }

// var rob = function(nums) {
//     return helper(nums,0);
// };

// 
function helper(nums, n){
	if (n == 0) return nums[0];
	else if (n == 1) return Math.max(nums[1], nums[0])
	else return (Math.max(nums[n] + helper(nums, n-2), helper(nums,n-1)))
}

var rob = function (nums) {

    return helper(nums, nums.length - 1)

};



console.log(rob([10,7,3,7]));
