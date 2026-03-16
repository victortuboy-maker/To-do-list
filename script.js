const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(e){

e.preventDefault();

const task = input.value;

if(task !== ""){

const li = document.createElement("li");

li.textContent = task;

taskList.appendChild(li);

input.value = "";

}

});