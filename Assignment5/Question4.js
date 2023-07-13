// By using Async/await:-
// Async/await is a more recent approach that simplifies asynchronous code.
// The async keyword is used to define an asynchronous function that always returns a Promise.
// The await keyword is used inside an async function to pause execution until a Promise is resolved or rejected.

async function fetchData() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 2000);
  });
}

async function handleData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

handleData();
