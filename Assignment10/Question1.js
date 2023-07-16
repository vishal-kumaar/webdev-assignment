// In Node.js, middleware is a function or a set of functions that can access and modify the request and response objects in the HTTP request-response cycle. Middleware functions are executed sequentially, allowing you to perform various tasks before a request reaches the final route handler or after it leaves the route handler.

// Middleware is a core concept in frameworks like Express, although it can also be used in raw Node.js HTTP servers. Some common use cases of middleware include logging, authentication, error handling, data parsing, and more.

// A middleware function has access to the following parameters:
function middleware(req, res, next) {
  // Do some tasks with the request and/or response objects
  next(); // Call next() to pass control to the next middleware in the chain.
}

// To use middleware in an Express application, you can use the app.use() method:
const express = require("express");
const app = express();

app.use(middleware);


// We can also specify middleware for specific routes:
app.get('/some-route', middleware, (req, res) => {
  // Route handler logic
});
