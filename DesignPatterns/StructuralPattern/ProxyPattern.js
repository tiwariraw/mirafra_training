// Proxies -> part of javascript meta programming
// It's a special object that wraps another object and allows you to to intercept and modify the fundamentlal operation like
// getting a propetery(get), writing a property(set), checking a property existence(has), deleting a property(delete)
// Dynamic modification existing objects

// Basic Proxy Example

// Note:Target is the original object
const target = {
  name: "Alice",
  age: 24
};

// Note: Handler defines how operations are intercepted, logging access to the properties
const handler = {
  get(obj, prop) {
    console.log(`getting ${prop}`);
    return obj[prop];
  }
};

// Note: Wraps the target with the handler
const proxy = new Proxy(target, handler);

console.log(proxy.name);
console.log(proxy.age);

// Proxy with a "set"
const handler2 = {
  set(obj, prop, value) {
    if (prop === "age" && value < 18) throw new Error("Age must be atleast 18");
    else obj[prop] = value;
    return true;
  }
};

const person = new Proxy({}, handler2);

person.age = 25;

console.log(person.age);

// Proxy with "has"

// Proxy with "delete"

// Proxy with "apply"

// Proxy with "getOwnPropertyDescriptor"

// Proxy with "defineProperty"

// Combining multiple proxy traps(use "get" and "set" in single handler)

// Note: Use case
// data validation like input types
// hiding private properties
// API wrappers -> modify API response formats dynamically
// logging and debugging -> track functional calls or property accesses
// prevent object mutation -> creating read only objects
//API Optimization where we implement caching
