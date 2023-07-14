// The class keyword in JavaScript allows you to define a class, which serves as a blueprint for creating objects.

// Example:-
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea()); // Output: 15
