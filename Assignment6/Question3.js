// The call, apply, and bind methods are used to control the value of the this keyword when invoking a function.

// Example:-
const person = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const student = {
  name: "Alice",
};

// The call method allows you to invoke a function with a specified this value and accepts arguments individually.
person.greet.call(student, "Hello"); // Output: Hello, Alice!

// The apply method is similar to call, but it accepts arguments as an array.
person.greet.apply(student, ["Hi"]); // Output: Hi, Alice!

// The bind method creates a new function that, when called, has a specified this value, and optionally, pre-defined arguments. It does not immediately invoke the function.
const boundGreet = person.greet.bind(student);
boundGreet("Hey"); // Output: Hey, Alice!
