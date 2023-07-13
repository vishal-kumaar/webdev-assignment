// 1. setTimeout
// It delays the execution of a function or a code block by a specified amount of time (in milliseconds).
// Syntax: setTimeout(function, delay)

// Example:-
// In the example below, the function inside setTimeout will be executed after a delay of 2000 milliseconds (2 seconds).
setTimeout(() => {
  console.log("Delayed execution");
}, 2000);


// 2. setInterval
// It repeatedly executes a function or a code block at a specific time interval.
// Syntax: setInterval(function, interval)

// Example:-
// In the example above, the function inside setInterval will be executed repeatedly with an interval of 1000 milliseconds (1 second) between each execution.
setInterval(() => {
  console.log("Repeated execution");
}, 1000);
