// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when using variables declared with let and const keywords. It refers to the period between the start of a scope and the point at which a variable is declared. During this zone, accessing the variable before its declaration results in a runtime error.

// In the TDZ, variables exist but cannot be accessed or assigned a value. Any attempt to access such variables will throw a ReferenceError. This behavior was introduced in ES6 to address issues with variables being accessed before their intended initialization.

console.log(x); // Throws a ReferenceError
let x = 10;
