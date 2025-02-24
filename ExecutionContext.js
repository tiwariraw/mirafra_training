function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
  fourth();
}

function fourth() {
  console.log("fourth");
}

first();

//Event loop and concurrency

console.log("start");

setTimeout(() => {
  console.log("Inside Set time out");
}, 1000);

Promise.resolve().then(() => {
  console.log("Inside Promise resolve");
});

console.log("end");

//Currying

const add = (a) => (b) => (c) => a + b + c;

console.log(add(2)(3)(4));
