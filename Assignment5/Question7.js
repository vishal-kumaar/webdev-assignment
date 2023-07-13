// The async and await keywords in JavaScript are used to handle asynchronous operations in a more synchronous-like and readable manner.

// async: The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a Promise. This allows you to use await inside the function to pause its execution until a Promise is resolved or rejected.

// await: The await keyword can only be used inside an async function. It is used to pause the execution of the function until a Promise is settled (either resolved or rejected). When await is used with a Promise, it suspends the function until the Promise is resolved, and the resolved value is returned. If the Promise is rejected, an error is thrown, and it can be caught using a try/catch block.

// Example:-
async function fetchDataAndProcess() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAndProcess();
