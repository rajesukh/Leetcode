let arr =[1,2,3,4,5,6,8,9]

function missingNumber (){

    let numb = Math.max(...arr)
    let totalSum = 0;
    for(i=0;i<arr.length;i++){
        totalSum+= arr[i]
      
    
    }
    console.log(totalSum)
//  1+2+3+4+5+6+8+9
return (numb*(numb+1)/2) -totalSum 
}

console.log(missingNumber(arr))