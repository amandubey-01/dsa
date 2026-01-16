function bubbleSort(arr){
    const n = arr.length;
    for (let iteration = 0; iteration < n-1; iteration++ ){
        let flagForSwap = false;
        for (let i = 0; i < n-1-iteration; i++){
            if (arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                flagForSwap = true;
            }
        }
        if (!flagForSwap){
            console.log("Array sorted at iteration", iteration);
            break;
        }
    }
    console.log(arr);
}

bubbleSort([3,4,5,2,1]);


