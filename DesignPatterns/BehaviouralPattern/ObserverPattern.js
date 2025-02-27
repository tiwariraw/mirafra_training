//The observer pattern allows an object(the first object we call it as subject) to notify multiple dependent objects(observers)
//when its state changes. This is a one-to-many dependency between objects.
//Usage:
//when multiple parts of an application needs a real time update
//Eg: Web Sockets, Notifications, Any subscription systems follows the same pattern

class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
subject.subscribe(observer1);

const observer2 = new Observer("Observer 2");
subject.subscribe(observer2);

subject.notify("New update");
