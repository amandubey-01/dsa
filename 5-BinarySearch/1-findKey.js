function findKey(arr, key){
    let s = 0;
    let e = arr.length -1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] < key){
            s = mid + 1;
        } else if(arr[mid] > key){
            e = mid - 1
        }
        else {
            return arr[mid];
        }
    }

    return -1
}

console.log(findKey([1,13,23,33,43,53], 104))

// JS arrays are objects with numeric keys
// Accessing a missing index returns undefined
// No "index out of bounds" error in JS
// Boundary bugs fail silently, not loudly

