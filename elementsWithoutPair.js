arr = [11, 1, 7, 11, 1, 2, 2, 3, 3, 4, 4, 48, 48, 2, 2]

function withoutPair(arr) {
let map = new Map();

    for (let curr of arr) {

        if (map.get(curr)) {

            map.set(curr, map.get(curr) + 1)
            

        } else {
            map.set(curr, 1);

        };



    }

    for (let val of map) {
        if (val[1] % 2 === 1) {
            console.log("without pair number is ", val[0])

        }

    }


}

console.log(withoutPair(arr))