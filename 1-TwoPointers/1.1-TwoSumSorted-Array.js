// Two Sum Sorted Array
//  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/


var twoSum = function(arr, t) {
    let s = 0;
    let e = arr.length -1;
    while (s<e){
        const curr = arr[s] + arr[e];
        if (curr == t){
            return [s + 1, e + 1];
        }
        else if(curr<t){
            s++;
        }
        else{
            e--;
        }
    }
    return [-1,-1]
};