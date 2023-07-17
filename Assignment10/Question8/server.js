const express = require("express");
const app = express();
const PORT = 8081;

let counter = 0;

app.get("/", (req, res) => {
  res.status(200).json({
    counter: counter,
  });
});

app.get("/increment", (req, res) => {
  counter++;
  res.status(200).json({
    counter: counter,
  });
});

app.get("/decrement", (req, res) => {
  counter--;
  res.status(200).json({
    counter: counter,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
