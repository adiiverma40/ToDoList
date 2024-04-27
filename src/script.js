// DOM variable 
const orderList = document.querySelector("#taskList");
const form = document.querySelector("form");

window.addEventListener("load",() =>{
    LoadTask();
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    createTask();
});

//load the previous task 

function LoadTask(){
    let task = [];
    let storedTask = localStorage.getItem("task");
    if (storedTask){
        task = JSON.parse(storedTask);
        task.forEach(tasks => {
            const newTask = document.createElement("li");
            newTask.textContent = tasks;
            newTask.style.textTransform = "capitalize";
            orderList.appendChild(newTask);
        });
    }
}

// function to create a new task
function createTask(){
    const newTask = document.createElement("li");
    const taskText = document.querySelector("#task");
    newTask.textContent = taskText.value.trim();
    newTask.style.textTransform = "capitalize";
    orderList.appendChild(newTask);
    
    //saving the task
    let task = [];
    let storedTask = localStorage.getItem("task");
    if(storedTask){
        task = JSON.parse(storedTask);
    }
    task.push(taskText.value.trim());
    saveTask(task);
    taskText.value = "";
    taskText.placeholder = "Add Another Task";
}

// save the task in local storage 

function saveTask(taskVar){
    localStorage.setItem("task", JSON.stringify(taskVar));
}