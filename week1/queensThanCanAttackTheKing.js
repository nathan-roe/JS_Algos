// On an 8x8 chessboard, there can be multiple Black Queens and one White King.

// Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.
const queensAttackTheKing = (queens, king) => {
    let diagnalArr = [];
    let straightArr = [];
    queens.map(position => {
        if(position[0] - king[0] === position[1] - king[1])
        {
            // console.log("Diagonal");
            // console.log(position, king);
            diagnalArr.push(position);
        }
        if(position[0] === king[0] || position[1] === king[0])
        {
            // console.log("Straight");
            // console.log(position, king);
            straightArr.push(position);
        }
    });
    console.log(diagnalArr);
    for(let i = 0;i<straightArr.length;i++)
    {
        let min0 = straightArr[i];
        let min1 = straightArr[i];
        for(let j = 0; j<straightArr.length;j++)
        {
            if(straightArr[i][0] === straightArr[j][0])
            {
                if(min0 > straightArr[j][1])
                {
                    min0 = straightArr[j]
                }
            } 
            else if(straightArr[i][1] === straightArr[j][1])
            {
                if(min1 > straightArr[j][0])
                {
                    min1 = straightArr[j]
                }
            }
        }
        console.log(min0);
        console.log(min1);
    }
    console.log(straightArr);
}
let queensVar = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]];
let kingVar = [0,0];
console.log(queensAttackTheKing(queensVar, kingVar));
