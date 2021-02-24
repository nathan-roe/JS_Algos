// fibonacci function that adds the digits within a certain number back, k, returning an array of length n.
const fibonacci = (n, k) => {
    let arr = [0,1];
    while(arr.length < n){
        let sum = 0;
        for(let i=arr.length-1;i>=0;i--){
            if(i >= arr.length-k){
                sum += arr[i];
            } 
            else{
                break;
            }
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
}
console.log(fibonacci(10, 5));