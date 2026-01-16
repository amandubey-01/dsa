const rollNo = [4,3,2,1,5,6,7,8,8,9,0,0,99,9,9,9];
const key = 9;

function linearSearch(arr, key){
    let res = [];
    for (let i = 0; i< arr.length; i++){
        if (arr[i] === key){
            res.push(i);
        }
    }
    return res;
}
let res = linearSearch(rollNo, key)
if (res.length == 0){
    console.log("Not Found");
}
else {
    console.log("Found at index", res);
}