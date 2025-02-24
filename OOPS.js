//Objects and Prototypes
//Javascript is purely Prototype based, every object in Javascript inherits properties and methos from Prototypes

//Prototype Inheritance
const person = {
  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }
};
const user = Object.create(person);
user.name = "John";
user.greet();

// Creating Objects in Javscript

//Object Literals
const user2 = {
  name: "Doe",
  age: "25",
  greet() {
    console.log(`Hello! My name is ${this.name} and my age is ${this.age}`);
  }
};

//Functional Constructor, This is not memory efficient because it has higher memory usage as every instance gets a new copy of greet
function User3(name, age) {
  (this.name = name),
    (this.age = age),
    (this.greet = function () {
      console.log(`Hello! My name is ${this.name} and my age is ${this.age}`);
    });
}

const user3 = new User3("Ram", 25);

console.log("name", user3.name);
console.log("age", user3.age);
user3.greet();

// Using Prototypes, Memory efficient, Greet is not copied for every object,instead it is shared via prototype
function User4(name, age) {
  this.name = name;
  this.age = age;
}

User4.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name} and my age is ${this.age}`);
};

const user4 = new User4("Shreya", 24);

user4.greet();

//Classes

//Syntactic sugar over Prototypes, Internally class still uses Prototype based inheritance under the hood
class User5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

User5.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name} and my age is ${this.age}`);
};

const user5 = new User5("Ashish", 23);

user5.greet();

//Object Oriented Principles

//Encapsulation
const User6 = (function () {
  const privateData = new WeakMap();
  class User6 {
    constructor(name) {
      privateData.set(this, { name });
    }
    getName() {
      return privateData.get(this).name;
    }
  }
  return User6;
})();

const user6 = new User6("Deepthi");

console.log(user6.getName());
console.log(user6.name);

//Introduced in ES 2020
class User7 {
  #password;
  constructor(userName, password) {
    this.userName = userName;
    this.#password = password;
  }
  getPassword() {
    return this.#password;
  }
}

const user7 = new User7("Anita", "Anita123");

console.log(user7.userName);
console.log(user7.getPassword());

//Inheritance

//Prototype based inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog1 = new Dog("Scooby1");
dog1.speak();

const dog2 = new Dog("Scooby2");
dog2.speak();

const dog3 = new Dog("Scooby3");
dog3.speak();

//Modern way of usig classes

class Animal1 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

//Polymorphism

//Method Overiding

class Shape {
  area() {
    return "Area formula not defined";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  superArea() {
    console.log(super.area());
  }
}

const shapeObj = new Shape();
console.log(shapeObj.area());

const circleObj = new Circle(3);
console.log(circleObj.area());
circleObj.superArea();

//Method Overloading within the class, it doesn't work

class Shape2 {
  area(a, b) {
    console.log("First area method", a, b);
  }
  area(a, b, c) {
    console.log("Second area method", a, b, c);
  }
}

const shape2 = new Shape2();

shape2.area(1, 2);

//Static Methods, belongs to classes and not instances

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10));

//Javascript alternatives for using ducktype

function userPerson(person) {
  if (person.name && person.age && typeof person.greet === "function") {
    person.greet();
  } else {
    throw new Error("Person object does not match required structure");
  }
}

const user8 = {
  name: "Avinash",
  age: 22,
  greet() {
    console.log("Hello, I am Avinash");
  }
};

userPerson(user8);

//Interface simulation using abstract class

class PersonInterface {
  constructor() {
    if (new.target === PersonInterface) {
      throw new Error("Cannot instantiate an interface directly");
    }
  }
  greet() {
    throw new Error("Method greet must be implemented");
  }
}

class Employee extends PersonInterface {
  constructor(name) {
    super();
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}`);
  }
}

const emp = new Employee("Hemanth");

emp.greet(); //If we don't create this method in Employee class and try to call the PersonInterface's method it will throw "Method greet must be implemented" error

const person2 = new PersonInterface();

console.log(person2); //Will give the error Cannot instantiate an interface directly
