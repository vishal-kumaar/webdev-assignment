// Difference between var & let:-

// 1. Scope: `var` has function/global scope, `let` has block scope.

function example() {
  var x = 1;
  let y = 2;

  if (true) {
    var x = 3; // Same variable as the one declared above
    let y = 4; // Different variable limited to this block
    console.log(x, y); // Output: 3, 4
  }

  console.log(x, y); // Output: 3, 2 (var is not block-scoped)
}

// 2. Hoisting: `var` variables are hoisted and can be accessed before declaration, `let` variables are in the Temporal Dead Zone.

console.log(x); // Output: undefined (var is hoisted)
var x1 = 10;

console.log(y); // Throws a ReferenceError (let is in the TDZ)
let y1 = 20;

// 3. Re-declaration: `var` allows re-declaration, `let` does not allow re-declaration within the same scope.

var x2 = 10;
var x2 = 20; // No error, x is re-declared

let y2 = 10;
let y2 = 20; // Throws a SyntaxError, y cannot be re-declared
