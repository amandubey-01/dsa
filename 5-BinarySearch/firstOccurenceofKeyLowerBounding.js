const arr = [1,2,3,3,3,4,4,4, 5, 5, 5]
const k = 4

// Find the first occurence of k, Lower Bounding
// why lower-bounding: even if we find the answer we still try to optimize it and try to look for the better candidate
// for the answer. element is 4 and the second priority is it should be the first occurence of 4.

// Binary Search

var firstK = function (arr, k){
    let s = 0;
    let e = arr.length - 1;
    ans = -1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if (arr[mid] === k){
            ans = mid;
            e = mid - 1;
        } else if(arr[mid] > k){
            e = mid - 1;
        } else{
            s = mid + 1;
        }
    }
    return ans;
}
console.log(firstK(arr, k))

