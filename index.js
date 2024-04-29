// Initializing the objects
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

// Where the inputs will be stored
let tasks = [];

function renderTasks() {
  // Setting the input to an empty string
  toDoList.innerHTML = "";

  //   For each task input
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task.title;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", function (e) {
      console.log("Clicked");
      task.completed = !task.completed;
      console.log(task.completed);
      renderTasks();
    });

    toDoList.appendChild(li);
  });
}

// Handle Form Submission

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskTitle = todoInput.value.trim();

  if (taskTitle !== "") {
    const task = {
      title: taskTitle,
      completed: false,
    };

    tasks.push(task);

    renderTasks();

    todoInput.value = "";
  }
});
