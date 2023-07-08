// Template literals:- It provide an improved way to work with strings in JavaScript. They allow for easier string interpolation, multiline strings, and the inclusion of expressions within strings.

// for example:-

const name = "Alice";
const age = 25;

const greeting = `Hello, ${name}! You are ${age} years old.`;

console.log(greeting); // Output: Hello, Alice! You are 25 years old.


// It also support multiline strings without the need for explicit line breaks or concatenation.
const message = `
  This is a
  multiline string.
  It preserves line breaks and indentation.
`;

console.log(message);
// Output:
//   This is a
//   multiline string.
//   It preserves line breaks and indentation.