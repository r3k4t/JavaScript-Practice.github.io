// This code is incorrect and but parts are important.

// Define UI element

var form  = document.querySelector("#task_form");
var taskList = document.querySelector('ul');
var clearBtn = document.querySelector("#clear_task_btn");
var filter = document.querySelector("task_filter");
var taskInput = document.querySelector("#new_task");


// Define events listeners
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);


// Define function
// Add Task
function addTask(e){
    if(taskInput.value === ""){
        alert("Add a Task!");

    }
    else{
       // Create li element
       var li = document.createElement('li');
       li.appendChild(document.createTextNode(taskInput.value + ""));
       taskList.appendChild(li);
       taskList.value = "";

       // Link
       var link = document.createElement('a');
       link.setAttribute('href','#');
       link.innerHTML = 'x';
       li.appendChild(link);


    }
    e.preventDefault();

}

//Remove Task
function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure")){
            var ele = e.target.parentElement;
            ele.remove();
        }
    }

}

// Clear Task
function clearTask(e){
    taskList.innerHTML = "";
     
    // while(taskList.firstChild){
    //     taskList.removeChild(taskList.firstChild);
    // } 
}