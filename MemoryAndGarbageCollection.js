//Memory Management and Garbage Collection (Uses Mark and Sweep Algorithm)

function createLeak() {
  globalLeak = "I'm a memoy leak";
}

createLeak();

console.log(globalLeak);

//Anything of var, let and const can be garbage collected automatically but not the global variables
//Global variables and Unnecassary timers should be avaoided to prevent memory leaks

// Function memory leak

function memoryLeak() {
  let intervalId = setInterval(() => {
    console.log("Running");
  }, 5000);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 6000);
}

memoryLeak();

//Event Listeners
