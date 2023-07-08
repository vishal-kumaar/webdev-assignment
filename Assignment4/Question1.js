// Hoisting in JavaScript is a process where variable and function declarations are moved to the top of their scope during compilation. Variables declared with var are hoisted but not their assignments, resulting in them being accessible but undefined. Function declarations are fully hoisted, allowing them to be called before their actual declaration in the code.

// Variable Hoising

console.log(x); // Output: undefined
var x = 10;



// Function Hoising

func(); // Output: "Hello!"

function func() {
  console.log("Hello!");
}
