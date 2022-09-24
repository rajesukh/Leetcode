let arr = [1, 4, 5, 7, 9, 10]   //target --  (pair of sum) 13

/*function isGivenSumPresent(sum) {
    let isPairExist = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                isPairExist = true
            };
        };
    };
    return isPairExist;
};
console.log(isGivenSumPresent(13))*/


function sumTotal(sum) {

    let = isSumOfPairExist = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j]=== sum) {
                return true;

            }
        }
    }
    return isSumOfPairExist
}

console.log(sumTotal(13))