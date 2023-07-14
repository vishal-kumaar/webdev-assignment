// A constructor is a special method in a class that is called when an object is created using the new keyword. Its purpose is to initialize the object's properties and perform any setup tasks.

// Example:-
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Creating a new instance of the Person class
const person = new Person("John", 25);
console.log(person.name); // Output: John
console.log(person.age); // Output: 25
