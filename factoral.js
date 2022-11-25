// factoral in for loop and RECURSION 
let num =5
function calculate(num) {
    
    for (let i = num; i > 1;) {
        i = i - 1;
        var fact = num * i;
        num = fact;
    }
    return fact;
}

console.log(calculate(num))

//  factoral in recursion  
// function factoral(n){
//     if(n==1) return 1;
//     else return  (n*(factoral(n-1)))
// }
// console.log(factoral(5))


