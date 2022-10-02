let arr = [11, 1, 7, 2, 2, 2, 3, 3, 3, 48, -100, 4, 48]

function higestSumOfSubarray() {
    if (arr.length < 3) {
        return;

    }

    let maxSum = []
    for (let i = 0; i < arr.length - 3; i++) {

        if (arr[i] + arr[i + 1] + arr[i + 2] > maxSum) {
            maxSum = arr[i] + arr[i + 1] + arr[i + 2]



        }

    }
    return maxSum

}

console.log(higestSumOfSubarray(arr))