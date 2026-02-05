const arr = [1,2,3,3,3,4,4,4, 5, 5, 5];
const k = 4;

var numJustGreaterThanK = function(arr,k){
   let s = 0;
   let e = arr.length -1;
   ans = -1;
   
   while(s<=e){
    let mid = Math.floor((s+e)/2);

    if(arr[mid] > k){
        ans = arr[mid];
        e = mid - 1 // this ensures it gets the smallest number greater than key
    } else{
        s = mid + 1;
    }
   }
   return ans;
}

console.log(numJustGreaterThanK(arr, k))
/*
In the context of binary search, "upper bounding" refers to the technique used to find the smallest element in a 
sorted array that is greater than a given key, ( K ). This involves searching for the first element greater than ( K ) 
and is often implemented to efficiently handle certain types of queries or operations.

In many languages when we need to find number just greater than K it is pre-implemented. And it is called 
upperbound(k)

Upper-bound means just above the last indicating value.
Lower-bound means the first occurence.

Lower bound = first index/value where arr[i] >= key
So yes → it gives the first occurrence of key (if key exists).

Upper bound = first index/value where arr[i] > key
So it points to the element just after the last occurrence of key.
*/