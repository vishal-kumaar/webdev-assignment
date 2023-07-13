// The purpose of the try and catch block in JavaScript is to handle exceptions and errors. Code that might throw an error is placed in the try block, and if an exception occurs, it is caught and handled in the catch block.
// We use it because it prevents the program from crashing and allows for graceful error handling. It is particularly useful when dealing with asynchronous operations or when interacting with external resources where errors can occur.

try {
  // Potentially error-prone code
  const result = someFunction();
  console.log(result);
} catch (error) {
  // Error handling
  console.error("An error occurred:", error);
}
