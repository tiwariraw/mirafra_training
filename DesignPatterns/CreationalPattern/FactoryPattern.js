// This pattern focusses on object creation while hiding the complexity of instantiation
// Fatory Pattern - This provide object creation without specifying their exact class

class Car {
  constructor(model) {
    this.model = model;
  }
}

class CarFactory {
  createCar(model) {
    return new Car(model);
  }
}

const factory = new CarFactory();

const car1 = factory.createCar("Toyota");
const car2 = factory.createCar("Hyundai");
const car3 = factory.createCar("Maruti");

console.log(car1);
console.log(car2);
console.log(car3);

//Usage (Creational)
// -> when the exact type of object isn't known untill run time
// -> when creating many objects with similar properties
// -> Encapsulate object creational logic dynamically for flexibility
