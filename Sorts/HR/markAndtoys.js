// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

function maximumToys(prices, k) {
    let arr = prices;
    let sum = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            arr[j] < arr[min] ? min = j : '';
        }
        if(sum + arr[min] < k)
        {
            sum += arr[min]; 
            count++;
        } 
        else {
            return count
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return count;
}