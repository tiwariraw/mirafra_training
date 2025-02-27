//Functional Programming is a Paradigm(not a function of a javascript) that treats computation as a evaluation of a mathematical function while
//avoiding change in the state and mutable data

//Higher Order Function -> takes one or more functions as arguments or return a function

function greet(name) {
  return `Hello ${name}!`;
}

function processInput(name, callback) {
  return callback(name);
}

console.log(processInput("Avinash", greet));

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);

console.log(double(5));

const triple = multiplier(3);

console.log(triple(5));

//Pure Functions -> A pure function always returns the same output for the same input
// wherein it has no side effects and doens't modify the global variablef file or UI

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));

//Impure functions -> It will have side effects

let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5));

//refactoring to pure function where output of 10 is predictable
function addPure(total, value) {
  return total + value;
}

console.log(addPure(0, 5));
console.log(addPure(5, 5));

//Immutablity -> not modifying existing data but instead creating new copies

let nums = [1, 2, 3, 4, 5];

let newNumbers = [...nums, 6];

//Mutablity

let nums2 = [1, 2, 3];

nums2.push(4);

console.log(newNumbers);
console.log(nums2);

//using ".map" for immutablity
const nums3 = nums2.map((num) => num * num);
console.log(nums3);

//Functions are considered as first class citizens because they can stored variables, passed as an arguments, returned
//from other functions and also can be used as a property of an object. We also call functions as first class citizens
const sayHello = function () {
  return "Hello";
};

console.log(sayHello());

//function composition -> Combining multiple functions into one

const toUpper = (str) => str.toUpperCase();

const exclaim = (str) => str + "Welcome";

const greet1 = (name) => `Hello ${name} `;

const welcome = (name) => exclaim(toUpper(greet1(name)));

console.log(welcome("Rahul"));

//Matrix multiplication using functional programming

function multiplyMatricesFP(A, B) {
  return A.map((row) =>
    B[0].map((_, j) => {
      return row.reduce((sum, el, k) => sum + el * B[k][j], 0);
    })
  );
}

const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log(multiplyMatricesFP(A, B));
