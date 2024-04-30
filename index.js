// Initializing the objects
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");

// Where the inputs will be stored
let tasks = [];

function renderTasks() {
  // Setting the input to an empty string
  toDoList.innerHTML = "";

  //   For each task input
  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = "Task: " + task.title + " || Days remaining: " + task.due;
    // li.textContent = task.dueDate;

    // if the item is completed(that is clicked) then the class completed is added to it
    if (task.completed) {
      li.classList.add("completed");
    }

    // For the li element to have a line throught decoration on click
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
  // prevent Default stops the webpage from reloading which is the default behavior for submitting form
  e.preventDefault();

  const taskTitle = todoInput.value.trim();
  const taskDueDate = todoDate.value;

  // function returns the days remaining between the current date and the chosen date
  const remainingDays = differenceInDays(taskDueDate);

  if (taskTitle !== "") {
    const task = {
      title: taskTitle,
      completed: false,
      due: remainingDays,
    };

    tasks.push(task);

    // calling sorting function
    sortArray(tasks);

    renderTasks();

    todoInput.value = "";
    todoDate.value = "";
  }
});

//  Function to find the days remaining to finish the task
function differenceInDays(date) {
  const currentDate = new Date();
  const due = new Date(date);

  const difference = due - currentDate;

  // The difference is in milliseconds and is converted to days
  const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24)) - 1;

  return daysRemaining;
}

// Function to sort tasks by date in ascending order
function sortArray(tasks) {
  tasks = tasks.sort((a, b) => {
    return a.due - b.due;
  });
}
