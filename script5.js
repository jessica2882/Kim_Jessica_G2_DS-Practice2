// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task 
  // TODO
  const task = {};

  // 2- Set the description from the text field
  // TODO
  const description = document.getElementById("description").value;
  task.description = description;

  // 3- Set the priority from select field
  // TODO
  const priority = document.getElementById("priority").value;
  task.priority = priority;

  // 4- Add the new task object to the array
  // TODO
  tasks.push(task);

  document.getElementById("description").value = "";
  document.getElementById("priority").value = "Low"; // Reset to default

  displayTasks();

  console.log(tasks);
}

function displayTasks() {
  const taskList = document.getElementById("taskList");

  if (!taskList) {
    const newTaskList = document.createElement('div');
    newTaskList.id = "taskList";
    document.body.appendChild(newTaskList);
  }

  const taskListContainer = document.getElementById("taskList");
  taskListContainer.innerHTML = ""; 

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    
    if (task.priority === "High") {
      taskDiv.style.backgroundColor = "red";
      taskDiv.style.color = "white";
      taskDiv.style.padding = "5px 10px";
    }

    taskDiv.textContent = `${task.description} `;

    taskListContainer.appendChild(taskDiv);
  });
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];
// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
