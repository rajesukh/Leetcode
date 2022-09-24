let arr = [1,3,5,2,4,1,6,5,8,9,4,7,5,2,1,6,9]

let n = arr.legth;
let w = 3;
let result = [];

for(currentWindow =0; currentWindow<arr.legth-w+1; currentWindow++){    
    let max = arr[currentWindow];
for(let i=currentWindow; i<currentWindow+w; i++){
    if(max<arr[i]){
        max= arr[i];
    };

};

    result.push(max)
}

console.log(result)