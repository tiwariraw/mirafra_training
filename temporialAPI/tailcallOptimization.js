
//callstack overflow
// function infiniteRecursion(){
//     return infiniteRecursion();
// }
// infiniteRecursion();

//Tail Call Optimization
function factorial(n){
    if(n===0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(6))
// note:preventing stack overflow
function tailcallOptimFactorial(n,acc=1){
 if(n===0) return acc;
 return tailcallOptimFactorial(n-1,n*acc);
}

console.log(tailcallOptimFactorial(6))