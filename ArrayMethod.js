
// Javascript Array Methods

const arr = [1,2,3,4,5];

// 1. map()
let newArr = arr.map(x => x * 2);
console.log('newArr',newArr);

// 2. forEach()
let ar1 = arr.forEach((ele) =>  console.log("print elemenet",ele));
console.log('ar1',ar1);

// 3. filter();
let filteredArray = arr.filter(ele => ele % 2);
console.log('filtered Array',filteredArray)

// 4. some();
let hasOddNumber = arr.some(num => num%2 !== 0);
console.log('hasOddNumber',hasOddNumber);

// 5. every();

let allEvenNumber = arr.every(num => num %2 == 0);
console.log('allEvenNumber',allEvenNumber);
