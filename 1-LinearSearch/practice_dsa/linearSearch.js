const rollNo = [1,3,4,5,2,5,6,2,3,2,34,2];
const key = 2;

function linearSearch(arr,key){
    const n = arr.length;
    const res = [];
    for (let i = 0; i<n; i++){
        if(arr[i]===key){
            res.push(i);
        }
    }
    if(res.length== 0){
        return "The element is not found";
    }
    else{
        return { message: "Element found", indices: res }; 
    }

}

console.log(linearSearch(rollNo,key))