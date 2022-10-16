
// function generateString(number) {

//     let finalStr = "";
//     let start = 0;
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";


//     while (start < number) {
//         finalStr += alphabet[start]
//         start++;

//     }
//     return finalStr;
// }

// console.log(generateString(4))

//*********************************************** */

function generateString(arr) {
    let finalStr = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < arr; i++) {

            finalStr += alphabet[i]


        }
        return finalStr


    }


function arrayEncodedWithChar(number){
 
for(let i=0;i<number.length; i++){
    number[i] = generateString(number[i]);
}

}
temp =  [4,5,2,3,6,5]
arrayEncodedWithChar(temp)
console.log(temp)
