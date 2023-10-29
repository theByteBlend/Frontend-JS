
// slice method

// The slice() method can be used to create a copy of an array
// or return a portion of an array. 
// It is important to note that the slice() method
// does not alter the original array but instead creates a shallow copy.

const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// 1. Shallow copy the Array.
// It creates the new array,
 const copyCities = cities.slice();
 console.log('copyCities',copyCities);

// 2. Using the start parameter
const output1 = cities.slice(2); 
// it print from second index and till end.
console.log(output1);

// 3. what happend when using -ve parameters
const output2 = cities.slice(-2); 
// It will select the last two cities in the array.
console.log(output2);
// 4. Using the start and end parameters.
const output3 = cities.slice(2,4); // it print from 2 index and till 4-1 = 3.
console.log(output3);

//





