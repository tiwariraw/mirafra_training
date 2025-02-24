//operators

//arithmetic operators
// +,-,*,/,%

var val1 = 10;
var val2 = 10;
console.log(++val1); // post increment //+1 happens before the execution of command
console.log(val2++); // post increment //+1 happens after the execution of command

//Assignment operatore (=,+=,-=,*=,/=,%=)

//Comparison operators (==,===,!=,!==, >,<,>=,<=)

//Logical operators (&&, ||, !)

//Bitwise operators (&,|,^)

var a = 10,
  b = 11,
  c = a & b,
  d = a | b,
  e = a ^ b,
  f = ~a,
  g = -10,
  h = ~g;
console.log("AND operation", c); //both true, then true
console.log("OR operation", d); // any one true, then true
console.log("XOR operation", d); // opposite of OR, any one false, then true
console.log("Negation", f); // opposite of OR, any one false, then true
console.log("Negation", h); // opposite of OR, any one false, then true
console.log("left shift", a << 1); // opposite of OR, any one false, then true
console.log("right shift", a >> 1); // opposite of OR, any one false, then true
