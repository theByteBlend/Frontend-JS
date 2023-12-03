// map method in Javascript

// The Array.map() method allows you to iterate over an array
// and modify its elements using a callback function.
// The callback function will then be executed on each of the array's elements.

let arr = [2,4,6,8,10];

for(let i = 0; i< arr.length; i++) {
     arr[i] = arr [i] * 4;
}

let modifiedArr = arr.map((ele) => {
 return ele * 4;
})

// console.log(arr, modifiedArr);

let arrobj = [{name:"A"},{name:"B"},{name:"C"}];

arrobj.map((obj) => {
//  console.log(obj);
})


arr.map((ele,index,arr) => {
     console.log(ele, index, arr);
})





