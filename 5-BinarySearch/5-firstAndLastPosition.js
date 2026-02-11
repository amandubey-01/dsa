var searchRange = function(nums, target) {
    let first = lowerBound(nums, target);
    if(first === nums.length || nums[first]!== target){
        return [-1,-1]
    }
    let last = upperBound(nums, target) - 1

    return [first, last]
};

function lowerBound(nums, target){
    let s = 0;
    let e = nums.length - 1;
    while (s <= e){
        let mid = Math.floor( (s+e) / 2);
        if(nums[mid] < target){
            s = mid + 1;
        } else{
            e = mid -1;
        }
    }
    return s;
}

function upperBound(nums, target){
    let s = 0;
    let e = nums.length - 1;
    while (s <= e){
        let mid = Math.floor( (s+e) / 2);
        if(nums[mid] <= target){
            s = mid + 1;
        } else{
            e = mid - 1;
        }
    }
    return s;
}

console.log(searchRange([5,7,7,8,8,10], 8))