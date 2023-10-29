
// JavaScript Array splice method
// The splice() method modifies an array (adds, removes or replaces elements).

// The syntax of the splice() method is:
// arr.splice(start, removeCount, item1, ..., itemN)

let months = ["Jan", "Feb", "Sun", "Mon"];

//  1. How to remove array elements with splice() 
    let days = months.splice(2);
    console.log('days', days); 
    // It start removing element from index 2 and return a removed array.

    // You can also define how many elements you want to remove from the array by
    // passing a second number argument known as removeCount.
    let days1 = months.splice(2, 1);
    console.log('days1', days1);

    console.log('months', months); // This is a modified array after splice.


//  2. How to add new array elements without removing any elements
    months.splice(2, 0, "Mar","Apr");
    console.log('months', months);
    // It remove 0 elements and start adding element from index 2.


//  3. How to remove and add array elements with splice()
    let days2 = months.splice(4, 1, "May", "Jun");
    console.log('days2', days2);
    console.log('months', months);