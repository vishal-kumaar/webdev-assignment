// 1. Object Destructuring:-

const person = { name: "Alice", age: 25 };

// Destructuring object properties
const { name, age } = person;

console.log(name); // Output: "Alice"
console.log(age); // Output: 25

const { name: personName, age: personAge } = person;

console.log(personName); // Output: "Alice"
console.log(personAge); // Output: 25


// 2. Array Destructuring:-
const numbers = [1, 2, 3, 4];

// Destructuring array elements
const [firstNumber, secondNumber] = numbers;

console.log(firstNumber); // Output: 1
console.log(secondNumber); // Output: 2

const [firstNum, ...restNums] = numbers;

console.log(firstNum); // Output: 1
console.log(restNums); // Output: [2, 3, 4]