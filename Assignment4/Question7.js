// The main difference between map & forEach are:-

// 1. map:- The map method returns a new array containing the results of applying a callback function to each element of the original array. It creates a transformed array of the same length.

const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]


// 2. forEach:- The forEach method does not return a value. It simply iterates over the array and executes a callback function for each element, but it does not create a new array.

numbers.forEach((num) => {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6
// 8
