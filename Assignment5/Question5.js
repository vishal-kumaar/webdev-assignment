// 1. Callbacks are functions that are passed as arguments to another function and are executed later, typically when an asynchronous operation completes. They allow for handling the result or outcome of the asynchronous operation.

// Example:-
function fetchData(callback) {
  // Asynchronous operation
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);

// 2. Callback Hell refers to a situation where multiple nested callbacks are used, leading to code that becomes difficult to read and maintain. It often occurs when dealing with asynchronous operations that depend on the results of previous asynchronous operations.

// Example:-
asyncOperation1(function (result1) {
  // First operation completed, moving to the second operation
  asyncOperation2(result1, function (result2) {
    // Second operation completed, moving to the third operation
    asyncOperation3(result2, function (result3) {
      // Third operation completed, moving to the fourth operation
      asyncOperation4(result3, function (result4) {
        // ... and so on
      });
    });
  });
});
