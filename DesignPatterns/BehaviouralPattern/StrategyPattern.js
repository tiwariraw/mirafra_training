//It allows selecting an algorithm dynamically at run time
//Usage:
//When multiple methods can achieve the same goal but needs flexibility
//Eg: Payment strategies

class PaymentStrategy {
  pay(amount) {}
}

class PayPal extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid amount ${amount} using paypal`);
  }
}

class CreditCard extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid amount ${amount} using credit card`);
  }
}

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    this.strategy.pay(amount);
  }
}

const payPal = new PaymentProcessor(new PayPal()); //Dependency Injection

payPal.executePayment(100);

const creditCard = new PaymentProcessor(new CreditCard());

creditCard.executePayment(200);
