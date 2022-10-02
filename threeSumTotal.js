let arr = [1, 3, 5, 6, 800, 900, 500]

function threeSumTotal(arr, sum) {

  let isSumexist = false;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = i + 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == sum){
          return isSumexist = true;

        }

      }

    }

  }

  return isSumexist;

}

console.log(threeSumTotal(arr,2200))