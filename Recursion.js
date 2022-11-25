// //  print 1 to 10 

// function countDown(min,max) {
//     if (min>max) return;
//     console.log(min);
//     min++;
//     return countDown(min,max)
// }
// console.log(countDown(1,10))





//  sum of sum upto "n"
// function sumOfNumbers(n) {
//     if(n==1) return 1;
//     else {
//     return (n+sumOfNumbers(n-1))
//     }
// }
// console.log(sumOfNumbers(10))







// number divisible by 7  

// let arr = [3, 5, 6, 5, 7]
// function divBy7(arr) {
//     if (arr.length == 0) return;
//     else {
//         let ele = arr.pop()
//         if (ele % 7 == 0)
//             console.log(ele)
//         else console.log("no")
//         divBy7(arr)
//     }
// }
// console.log(divBy7(arr))








// reverse element in resursion 
// let str= "madamm"

// function isPlr(str){
//     if(str.length<=1) return true;

//     if(str[0]==str.slice(-1)) return isPlr(str.slice(1,-1))

//     else return false;
// } 

// console.log(isPlr(str))






// reverse in recursion 


// let arr= ["a", "b", ["c", [[["d","e"]]]]] 
// // let arr= [1,2, [3,4,5] [6,7]]
// // concatination 

// function flattenArray(arr){
//     let res =[];
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])==false)  res.push(arr[i]);
//         else res= res.concat(flattenArray(arr[i]))
//     }
//     return res;
// }
// console.log(flattenArray(arr))










// make first letter Capital in recursion




// function capitalLetters(arr){ 
//     let res =[];
//     for(let ele of arr){
//         res = res.concat(ele.slice(0,1)).toUppercase();
//         return capitalLetters(arr.slice(1))
// }
// console.log(capitalLetters(arr))

// }

