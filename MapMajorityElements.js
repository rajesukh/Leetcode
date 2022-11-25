let arr = [1,2,2,1,1,2,1]
function majorityElements(arr) {
    let map = new Map()
    let maxFreq = 0;
    let major = 0;
    for (let ele of arr) {
        if(map.get(ele)) {
            map.set(ele, map.get(ele) + 1)
            if (maxFreq < map.get(ele)) {
                maxFreq = map.get(ele)
                major = ele

            }

        } else map.set(ele, 1)
    }
    console.log(map, maxFreq, major)
}

console.log(majorityElements(arr))