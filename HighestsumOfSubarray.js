let arr = [11, 1, 7, 2, 2, 2, 3, 3, 3, 48, -100, 4, 48]

function higestSumOfSubarray(arr) {
    if (arr.length < 3) {
        return;
        
    }
    let maxSum = [];
    let showSubArray = [];
    let result= [];
    for (let i of arr) {
        if (arr[i] + arr[i + 1] + arr[i + 2] > maxSum) {
            maxSum = arr[i] + arr[i + 1] + arr[i + 2]
            showSubArray = [arr[i], arr[i + 1], arr[i + 2]]
        }

    }
    return showSubArray
}

console.log(higestSumOfSubarray(arr))