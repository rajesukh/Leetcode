let arr  =[1,4,5,7,9,10]




function sumTotal(sum){
let left =0; 
let right = arr.length-1;
let isPairExist =false;

    while(left<right){
        if(arr[left]+arr[right] === sum){
            isPairExist = true;
            break;
    
        }else if(arr[left]+arr[right]>sum){
            right--;

        }else{
            left++;
        };


    }

return isPairExist;

}

console.log(sumTotal(10))