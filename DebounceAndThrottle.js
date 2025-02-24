//Debouncing
// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// const handleResize = debounce(() => {
//   console.log("inside the body");
// }, 300);

// window.addEventListener("resize", handleResize);

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

function logMessage(message, timeStamp) {
  console.log(message, timeStamp);
}

const throttleLog = throttle(logMessage, 3000);
throttleLog("Hello", new Date().toLocaleTimeString());
setTimeout(() => {
  throttleLog("Hi", new Date().toLocaleTimeString());
}, 4000);
