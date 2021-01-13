// An array of integers is either all odd or all even except one number, return that number
function findOutlier(integers){
    let isEven = 0;
    integers.map((val, i) => val%2 === 0 ? isEven++ : isEven--);
    isEven > 0 ? 
    integers.map(val => val%2 !== 0 ? isEven = val : val) :
    integers.map(val => val%2 === 0 ? isEven = val : val);
    return isEven;
}