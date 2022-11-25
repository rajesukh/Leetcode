let arr = [5,9,5,8,1,4,3,2,-5,-50]

function mergeSorting(arr){
if(arr.length<2){
return arr;
}

let mid = Math.round(arr.length/2)
let leftArr = arr.slice(0,mid)
let rightArr =arr.slice(mid)
return merge(mergeSorting(leftArr),mergeSorting(rightArr))
}
function merge(leftArr,rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
console.log(mergeSorting(arr))
