const express = require("express");
const app = express();
const PORT = 4000;
const generateId = require("./generateId");
const { todoMiddleware } = require("./todo.middleware");

app.use(express.json());
app.use("/add", todoMiddleware);

let todos = [];

app.get("/", (req, res) => {
  res.status(200).json(todos);
});

app.post("/add", (req, res) => {
  const { task } = req.body;
  const todo = {
    id: generateId(),
    task,
    status: "Pending",
  };
  todos.push(todo);
  res.status(200).json({
    success: true,
    message: "Todo created successfully",
    data: todos,
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;

  const { task, status } = req.body;
  if (!task && !status) {
    return res.status(400).json({
      success: false,
      message: "Task/Status is required",
    });
  }

  let todoNotFound = true;

  todos.forEach((todo) => {
    if (todo.id === id) {
      if (task) {
        todo.task = task;
      }
      if (status) {
        todo.status = status;
      }
      todoNotFound = false;
    }
  });

  if (todoNotFound) {
    return res.status(400).json({
      success: false,
      message: "Todo not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Todo updated succesfully",
    data: todos,
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let todoNotFound = true;

  let newTodos = todos.filter((todo) => {
    if (todo.id !== id) {
      return todo;
    }
    todoNotFound = false;
  });

  if (todoNotFound) {
    return res.status(400).json({
      success: false,
      message: "Todo not found",
    });
  }

  todos = newTodos;
  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
    data: todos,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
