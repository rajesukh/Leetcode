let arr = [4, 8, 5, 6, 3, 2, 5, 6,-5,-50]
function findingElements(arr) {
    let highest = arr[0];
    let secondHighest = arr[0]
    let thirdHighest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            thirdHighest=secondHighest
            secondHighest = highest
            highest = arr[i]    
        } else if (arr[i] > secondHighest) {
            thirdHighest = secondHighest
            secondHighest = arr[i]
        }else if(arr[i]>thirdHighest){
            thirdHighest=arr[i];
        }
 
    }
    return secondHighest;
}
console.log(findingElements(arr))