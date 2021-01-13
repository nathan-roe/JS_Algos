// Given a number (256) add the digits recursively until there's just one digit left: 256 -> 13 -> 4
function digital_root(n) {
  let numArr = n.toString().split('');
  let total = 0;
  numArr.map(val => total += Number(val));
  if(total.toString().length > 1){
      return digital_root(total);
  }
  else {
    return total;
  }
}