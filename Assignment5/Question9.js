// fetch is a built-in function in modern web browsers that provides an easy way to make asynchronous HTTP requests. It allows fetching resources from a specified URL, typically used for retrieving data from APIs. fetch returns a Promise that resolves to the Response object representing the server's response.
// It also provides various methods to handle the response, such as json() to extract JSON data, text() to retrieve the response as text, and more.

// Example:-
fetch("https://api.example.com/data?api_key=exampleKey")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
