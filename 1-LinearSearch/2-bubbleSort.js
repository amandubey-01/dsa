// function bubbleSort(arr){
//     const n = arr.length;
//     for (let iteration = 0; iteration < n-1; iteration ++){
//         for (let i = 0; i<n-1; i++){
//             if(arr[i] > arr[i+1]){
//                 // swap
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             }
//         }
//     }
//     console.log(arr)
// }

// bubbleSort(['a', 'd', 'c', 'b', 4,2,3])


//Optimization: break when not swapped, doesn't need to go to end as the last one is already largest.
function bubbleSort(arr){
    const n = arr.length;

    for (let iteration = 0; iteration < n-1; iteration ++){
        let flagForSwap = false;
        for (let i = 0; i<n-1 - iteration; i++){
            if(arr[i] > arr[i+1]){
                // swap
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                
                flagForSwap = true
            }

        }
        if(!flagForSwap){
            console.log("Array sorted at itetation ", iteration)
            break;
        }

    }
    console.log(arr)
}

bubbleSort([3,4,5,2,1])
