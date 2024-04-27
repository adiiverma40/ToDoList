// DOM variable
const orderList = document.querySelector("#taskList");
const form = document.querySelector("form");

// variable declaration
let isClicked = true;
window.addEventListener("load", () => {
  LoadTask();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createTask();
});

//load the previous task

function LoadTask() {
  let task = [];
  let storedTask = localStorage.getItem("task");
  if (storedTask) {
    task = JSON.parse(storedTask);
    task.forEach((tasks) => {
      const newTask = document.createElement("li");
      newTask.textContent = tasks;
      orderList.appendChild(newTask);
      newTask.addEventListener("click", () => {
        toggleButton(newTask);
        completedTask(newTask);
        deleteTask(newTask);
      });
    });
  }
}

// function to create a new task
function createTask() {
  const newTask = document.createElement("li");
  const taskText = document.querySelector("#task");
  if(taskText.value.trim() !== "") {
  newTask.style.textTransform = "capitalize";
  newTask.textContent = taskText.value.trim();
  orderList.appendChild(newTask);
  }
  else{
    alert("Write task Please.....");
    return
  }
  // Add event listener to newTask element
  newTask.addEventListener("click", function () {
    toggleButton(newTask);
    completedTask(newTask);
    deleteTask(newTask);
  });
  //saving the task
  let task = [];
  let storedTask = localStorage.getItem("task");
  if (storedTask) {
    task = JSON.parse(storedTask);
  }
  task.push(taskText.value.trim());
  saveTask(task);
  taskText.value = "";
  taskText.placeholder = "Add Another Task";
}

// save the task in local storage

function saveTask(taskVar) {
  localStorage.setItem("task", JSON.stringify(taskVar));
}

// function for toggling button on off

function toggleButton(newTask) {
  let isDltBtn = newTask.querySelectorAll(".dlt-btn");
  let isCompBtn = newTask.querySelectorAll(".comp-btn");
  console.log(isDltBtn);
  if (isDltBtn.length === 0 && isCompBtn.length === 0) {
    console.log("its me");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("button", "dlt-btn");
    newTask.appendChild(deleteBtn);
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("button", "comp-btn");
    newTask.appendChild(completeBtn);
    isDltBtn = newTask.querySelectorAll(".dlt-btn");
    console.log(isDltBtn);
  } else {
    isDltBtn[0].style.display = "none";
    isCompBtn[0].style.display = "none";
    isDltBtn.forEach((btn) => {
      btn.remove();
    });
    isCompBtn.forEach((btn) => {
      btn.remove();
    });
  }
}

function completedTask(newTask) {
  let compTaskBtn = document.querySelector(".comp-btn");
  try {
    compTaskBtn.addEventListener("click", () => {
      newTask.style.textDecoration = "line-through";
      let task = JSON.parse(localStorage.getItem("task"));
      let index = task.indexOf(newTask.textContent);
      task.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(task));
    });
  } catch (err) {
    console.log(err);
    console.log(
      "error is because their are not any button in the screen dont worry"
    );
  }
}

function deleteTask(taskElement) {
  let deleteBtn = document.querySelector(".dlt-btn");
  try {
    deleteBtn.addEventListener("click", () => {
      taskElement.remove();
      let task = JSON.parse(localStorage.getItem("task"));
      let index = task.indexOf(taskElement.textContent);
      task.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(task));
    });
  } catch (err) {
    console.log(err);
    console.log(
      "error is because their are not any button in the screen don't worry"
    );
  }
}
