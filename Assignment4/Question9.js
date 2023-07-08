// Default parameter

function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("Vishal"); // Output: Hello, Vishal!