/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {
    
    const myObject = {};
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (myObject.hasOwnProperty(complement)) {
    return [myObject[complement], i];
  }
  myObject[nums[i]] = i;
}
  
};




// var twoSum = function(nums, target){
//     for(i=0; i<nums.length; i++){
//         for(j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === target){
//                 return[i, j;]


//             }



//         }



//     }


// }



