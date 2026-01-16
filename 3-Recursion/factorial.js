function factorial(n){
    if (n <= 0) return 1;
    let fact;
    fact = n * factorial(n-1);
    return fact;
}
console.log(factorial(5));