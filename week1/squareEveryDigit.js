//  Given a number square every digit and return the new number, 812 would become 6414
function squareDigits(num){
    let numArr = num.toString().split('');
    let squareArr = [];
    numArr.map(val => squareArr.push(Number(val)*Number(val)));
    return Number(squareArr.join(''));
}