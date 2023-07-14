// The this keyword refers to the current object on which a method is being called. Its purpose is to access and manipulate the object's properties and methods within the method.

// Example:-
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("John");
person.greet(); // Output: Hello, my name is John.
