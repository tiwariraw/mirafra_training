//It allows addition of new behaviour to objects dynamically
//Used when you need to extend functionality without modifying the existing code

class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 2;
  }
}

let coffee = new Coffee();

// console.log(coffee.cost());

coffeeWithMilk = new MilkDecorator(coffee);

console.log(coffeeWithMilk.cost());
