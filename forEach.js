
const numbers = [10,20,30,40,50];

// using for loop 
// for(i = 0; i < numbers.length;i++) {
//      console.log(`The number ${numbers[i]} is at index ${i}`);
// }

// forEach method

const nums = numbers.forEach(function(value,index,array) {
     console.log("value:-",value,"index:-", index,"array",array);

})

console.log(nums);

// cons:
//1. break statement cannot be used in forEach method;
//2. It return undefined



