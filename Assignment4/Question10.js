// The spread operator (...) in JavaScript is a syntax introduced in ECMAScript 6 (ES6) that allows an iterable (like an array or string) to be expanded or spread into individual elements. It provides a concise way to manipulate arrays, objects, and function arguments.

// 1. Array spread:-
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5]; // Creates a new array

console.log(newArray); // Output: [1, 2, 3, 4, 5]


// 2. Object spread:-
const person = { name: "Alice", age: 25 };
const newPerson = { ...person, location: "London" }; // Creates a new object

console.log(newPerson);
// Output: { name: "Alice", age: 25, location: "London" }