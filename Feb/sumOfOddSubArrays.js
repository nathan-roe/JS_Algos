var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        
        let x = 1;
        while(x <= arr.length - i){
            for(let j=0;j<x;j++){
                sum += arr[i+j];
            }
            x += 2;
        } 
    }
    return sum;
};