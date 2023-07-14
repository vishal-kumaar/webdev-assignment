// The super keyword is used in a subclass constructor to refer to the constructor of its parent class. It allows the subclass to inherit and initialize the properties defined in the superclass.

// Example:-
class Vehicle {
  constructor(color) {
    this.color = color;
  }

  start() {
    console.log("Engine started.");
  }
}

class Car extends Vehicle {
  constructor(color, brand) {
    super(color); // Calling the constructor of the Vehicle class
    this.brand = brand;
  }

  drive() {
    console.log(`Driving the ${this.color} ${this.brand}.`);
  }
}

const myCar = new Car("blue", "Toyota");
myCar.start(); // Output: Engine started.
myCar.drive(); // Output: Driving the blue Toyota.
