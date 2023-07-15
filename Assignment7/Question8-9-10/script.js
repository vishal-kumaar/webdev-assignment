const taskInput = document.getElementById("task-input");
const submit = document.getElementById("submit");
const todos = document.getElementById("todos");
const editArea = document.getElementById("edit-area");
const editTaskInput = document.getElementById("edit-task-input");
const update = document.getElementById("update");
const close = document.getElementById("close");

const showTask = (tasks) => {
  let html = ``;

  tasks.forEach((task, index) => {
    html += `
    <div class="todo">
        <p class="task" id="task-${index}">${task.name}</p>
        <p class="status" id="status-${index}">Status: ${task.status}</p>
        <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
        <button class='mark-btn ${
          task.status === "Pending" ? "completed" : "pending"
        }' onclick="markTask(${index})">Mark ${
      task.status === "Pending" ? "Completed" : "Pending"
    }</button>
        <button class="edit-btn" onclick={editTask(${index})}>Edit Task</button>
    </div>`;
  });

  todos.innerHTML = html;
};

const addTask = () => {
  let taskObj = localStorage.getItem("task");

  if (!taskObj) {
    localStorage.setItem("task", JSON.stringify([]));
  }

  taskObj = localStorage.getItem("task");
  taskObj = JSON.parse(taskObj);

  const task = {
    name: taskInput.value,
    status: "Pending",
  };
  taskObj.push(task);

  localStorage.setItem("task", JSON.stringify(taskObj));

  showTask(taskObj);
  taskInput.value = "";
};

const removeTask = (index) => {
  const taskObj = JSON.parse(localStorage.getItem("task"));
  taskObj.splice(index, 1);

  localStorage.setItem("task", JSON.stringify(taskObj));
  showTask(taskObj);
};

const markTask = (index) => {
  const taskObj = JSON.parse(localStorage.getItem("task"));

  if (taskObj[index].status === "Pending") {
    taskObj[index].status = "Completed";
  } else {
    taskObj[index].status = "Pending";
  }

  localStorage.setItem("task", JSON.stringify(taskObj));
  showTask(taskObj);
};

const editTask = (index) => {
  editArea.style.display = "flex";

  const taskObj = JSON.parse(localStorage.getItem("task"));
  editTaskInput.value = taskObj[index].name;

  update.addEventListener("click", (event) => {
    event.preventDefault();
    
    taskObj[index].name = editTaskInput.value;
    localStorage.setItem("task", JSON.stringify(taskObj));

    editArea.style.display = "none";
    showTask(taskObj);
  });

  close.addEventListener("click", () => {
    editArea.style.display = "none";
  });
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

let taskObj = localStorage.getItem("task");
if (taskObj) {
  taskObj = JSON.parse(taskObj);
  showTask(taskObj);
}
