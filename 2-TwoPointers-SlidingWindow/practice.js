const A = [1,3,7,14,18,19,25,17,13];

for (let i= 0; i< A.length-1; i++){
    for (let j = i+1; j< A.length; j++){
        if(A[i] + A[j] == 20){
            console.log(`One such pair is (${A[i]}, ${A[j]})`)
        }
    }
}
