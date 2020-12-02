// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// Input: matrix = 
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
            // [7,2,3],[4,5,6],[1,8,9]

//  inner start swap with outer last of inner start 
//  inner second swap with outer second to last of inner start 
//  continue
//  When at inner last swap with 
// const rotateImage = (img) => {
//     for(let i=img.length-1;i>0;i--)
//     {
//         console.log(i);
//         for(let j=img[i].length-1;j>0;j--)
//         {
//             for(let y=img[i].length-1;y>0;y--)
//             {
//                 [img[i][j], img[y][j]] = [img[y][j], img[i][j]]
//             }
//         }
//     }
//     return img;
// }
// console.log(rotateImage(matrix));