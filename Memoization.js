//Memoization

function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("fetching from cache", key);
      return cache[key];
    }
    console.log("computing result for", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slow = (num) => num * 2;

const fast = memoize(slow);

console.log(fast(11));
console.log(fast(11));
