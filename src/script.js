////DOM variable declaration

let taskLists = document.querySelector("#taskList");
let form = document.querySelector("form");



// onwindow load 
document.addEventListener("DOMContentLoaded", () => {
    // loadTasks();
});


form.addEventListener("submit", (event) => {
    createTaskList();
    event.preventDefault();
});

function loadTasks(){
    
}

function createTaskList(){
    let taskList = document.querySelector("#task").value.trim();
    if (taskList !== '') { // Check if the task text is not empty
        let newTask = document.createElement("li");
        newTask.innerText = taskList;
        newTask.style.textTransform = "capitalize";
        taskLists.appendChild(newTask);
        document.querySelector("#task").value = "";
        document.querySelector("#task").placeholder = "Add another Task";
        saveTasks(taskList)
    }
    else {
        alert("You must write something!");
        return;
    }
    
}

function saveTasks(taskList) {
    // Convert the array of tasks to a JSON string and store it in localStorage
    localStorage.setItem('tasks', JSON.stringify(taskList));
}










//   function loadTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = ''; // Clear existing tasks
    
//     // Check if there are any existing tasks in localStorage
//     const storedTasks = localStorage.getItem('tasks');
//     console.log(storedTasks)
//     if (storedTasks) {
//       // Parse the JSON string stored in localStorage and convert it back to an array
//       const tasks = JSON.parse(storedTasks);
      
//       // Loop through the array of tasks and create list items for each
//       tasks.forEach(function(taskText) {
//         createTaskElement(taskText);
//       });
//     }
//   }
  
//   function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();
    
//     if (taskText === '') {
//       alert("You must write something!");
//       return;
//     }
    
//     createTaskElement(taskText);
//     saveTasks();
//     taskInput.value = '';
//   }
  
//   function createTaskElement(taskText) {
//     const taskList = document.getElementById('taskList');
//     const li = document.createElement('li');
//     li.textContent = taskText;
    
//     // Toggle 'completed' class on click
//     li.addEventListener('click', function() {
//       this.classList.toggle('completed');
//       saveTasks();
//     });
    
//     taskList.appendChild(li);
//   }
  
//   function saveTasks() {
//     const tasks = [];
//     // Get all existing tasks
//     const taskItems = document.querySelectorAll('#taskList li');
//     taskItems.forEach(function(item) {
//       tasks.push(item.textContent);
//     });
//     // Save tasks to localStorage as a JSON string
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
