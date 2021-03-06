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
filter.addEventListener('keyup',filtertask);
document.addEventListener('DOMContentLoaded',getTasks);



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

       storeTaskInLocalStorage(taskInput.value);

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
            //console.log(ele)
            removeFromLS(ele);
        }
    }

}

// Clear Task
function clearTask(e){
    // taskList.innerHTML = "";
     

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    } 
}

// Filter Task

function filterTask(){
    var text = e.target.value.toLowerCase();

    document.querySelectorAll("li").forEach(task => {
        var item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !=-1){
            task.style.display = 'block';

        }else{
            task.style.display = 'none';

        }
    });
    
}



// Store in Local Storage
function storeTaskInLocalStorage(task){
    var tasks;
    if(localStorage.getItem('tasks' === null )){
        tasks =[];

    }else{
        task = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasks(){
    var tasks;
    if(localStorage.getItem('tasks' === null )){
        tasks =[];

    }else{
        task = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task =>{
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ""));
        taskList.appendChild(li);
 
    
 
        taskList.value = "";
 
        // Link
        var link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);

    });
}

function removeFromLs(taskItem){

    var tasks;
    if(localStorage.getItem('tasks' === null )){
        tasks =[];

    }else{
        task = JSON.parse(localStorage.getItem('tasks'));
    }
    var li  = taskItem;
    li.removeChild(li.lastChild);

    task.forEach((task,index)=>{
        if(li.textContent.trim()=== task){
            tasks.splic(index,1);

        };
    })

 localStorage.setITem("tasks",JSOn.stringify(tasks));
}