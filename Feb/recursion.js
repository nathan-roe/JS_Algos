const rSum = (num) => {
    if(num == 1){
        return 1;
    }
    else{
        return num + rSum(num-1);
    }
}
console.log(rSum(5));

// rFactorial(1) = 1                  => 1
// rFactorial(2) = 2 * 1              => 2
// rFactorial(3) = 3 * 2 * 1          => 6
// rFactorial(4) = 4 * 3 * 2 * 1      => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

const rFactorial = (num) => {
    if(num === 1){return 1;}
    else{
        return rFactorial(num-1) * num;
    }
}
console.log(rFactorial(5));

// rFibonacci(0) = 0           => 0
// rFibonacci(1) = 1           => 1
// rFibonacci(2) = 1           => 1
// rFibonacci(3) = 1 + 1       => 2
// rFibonacci(4) = 1 + 2       => 3
// rFibonacci(5) = 2 + 3       => 5
// rFibonacci(6) = 3 + 5       => 8

const rFibonacci = (num) => {
    if(num === 1 || num === 2){return 1;}
    else{
        return rFibonacci(num-1) + rFibonacci(num-2);
    }
}
console.log(rFibonacci(9));