let arr = [1,2,3,4,5]

function isValidNumber (arr){

let notANumber = false;

for(let i=0; i<arr.length; i++){
    if(arr[i]>='0' && arr[i]<='9'){
        continue;

    }else {
        notANumber = true;
        break;

    }

};

return notANumber

}
console.log(isValidNumber(arr))