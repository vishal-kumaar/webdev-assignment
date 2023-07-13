// An asynchronous function in JavaScript is defined using the async keyword before the function declaration.
// Within the async function, you can use the await keyword to pause the execution and wait for a Promise to resolve before continuing. This allows for more readable and structured code compared to traditional callback-based or promise-based approaches.

async function fetchDataAndProcess() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// This signifies that the function will perform asynchronous operations and return a Promise.
