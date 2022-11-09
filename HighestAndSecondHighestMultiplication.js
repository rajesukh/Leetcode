let arr = [5, 1, 2, 42, 5, 2, 3, 6, 2, 1, 5, 6, 3, 2, -3, -2, 5]
function bubbleSort() {
    for (let i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
function multiPlication(arr) {
    let highest = arr.length;
    let secondHighest = arr.length - 1;
    return highest * secondHighest;
}
console.log(multiPlication(arr))
    




