'use strict'


//CREATING VARIABLES
const task = document.getElementById("task");
const add = document.getElementById("add");
const container = document.getElementById("container");
const category = document.querySelector("#category");



//ADD (+) BUTTON ==> ADDING ITEMS TO LIST
add.addEventListener('click', function () {

    if (task.value.length == 0) {
        alert("Add task first")
    }
    else {
        //ADDING ITEM IN CONTAINER
        const item = document.createElement('div');
        item.classList.add("list-item");

        const p = document.createElement('p');
        p.classList.add("text");
        p.innerText = task.value;

        const done = document.createElement('button');
        done.classList.add("done")
        done.classList.add("btn")
        done.innerHTML = `<i class="fa-solid fa-circle-check"></i>`

        const remove = document.createElement('button');
        remove.classList.add("remove")
        remove.classList.add("btn")
        remove.innerHTML = `<i class="fa-solid fa-trash"></i>`

        item.appendChild(p);
        item.appendChild(done);
        item.appendChild(remove);

        container.appendChild(item);
        task.value = "";

        //MAKING DONE BUTTON CLICKABLE
        done.addEventListener('click', function () {
            p.classList.toggle("task-done");
            item.classList.add("task-completed");
        })


        //MAKING REMOVE BUTTON CLICKABLE
        remove.addEventListener('click', function () {
            remove.parentNode.remove()
        })
    }
});


//ADD EVENTLISTENER TO SELECTION
category.addEventListener('click', filter);


function filter(e) {
    const todos = container.children;  //HTML collection
    for (const todo of todos) {
        
        //CHECKING WHICH OPTION IS SELECTED

        switch (e.target.value) {
            case "All":
                todo.style.display="flex";
                break;

            case "Completed":
                if (todo.classList.contains("task-completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                } 
                break;

            case "Incompleted":
                if (!todo.classList.contains("task-completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                } 
                break;
        }

    }
}

