// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow chaining multiple async operations. The three primary methods of a Promise are:

// 1. then(): Attaches callbacks to handle the resolved value of a Promise or the rejection reason.
// 2. catch(): Attaches a callback to handle errors or rejections in a Promise chain.
// 3. finally(): Attaches a callback that is executed regardless of the Promise's resolution, either success or failure.

// Example:-
fetch("https://api.example.com/data?api_key=exampleKey")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Cleanup code here");
  });
