const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");
const msg = document.getElementById("msg");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for(let task of tasks){

    displayTask(task);

    }

taskInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addTask();
    }
})

addBtn.addEventListener("click", function(){
    //console.log(taskInput.value);
    addTask();
});

function addTask(){

    if(taskInput.value === ""){
        return;
    }

    tasks.push(taskInput.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTask(taskInput.value);

    taskInput.value = "";

    taskInput.focus();
}
function displayTask(task){
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = task;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    checkBox.addEventListener("change", function(){
        span.classList.toggle("completed");
    });

    deletebtn.addEventListener("click", function(){
    if(confirm("Do you really want to delete this task?")){

        let idx = tasks.indexOf(task);

        tasks.splice(idx, 1);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();
        }
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deletebtn);

    tasklist.appendChild(li);
}