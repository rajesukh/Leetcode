let keys = [5, 6, 4, 3, 160, 6]
let values =["yes", "no","ok","cool","fine","absolutely"]

// let buildMap = (key, value) => {
//     let map = new Map();
//     for (i = 0; i < key.length; i++) {
//         map.set(key[i], value[i])
//     }
//     return map;
// }
// console.log(buildMap(key,value))

let buildMap=(keys,values)=>{
    let map =new Map();
    for(i=0;i<keys.length;i++){
        map.set(keys[i],values[i])
        
    }
    return map;
}

console.log(buildMap(keys,values))