//import{ Task } from "./task.js";


const inputTask = document.querySelector(".input_task");
const btnCrear = document.querySelector(".btn_crear");
const listTask = document.querySelector(".container_list_task");

let arrayTasks = [];


btnCrear.onclick = function() {
    const taskText = inputTask.value;
    //console.log("tasktext",taskText);

    //validamos que el text no este vacio

    if (taskText === ""){
        alert("debes completar la caja de texto");
        return;
    }

    const task = new Task(arrayTasks.length + 1,taskText , new Date(), 1);
    //console.log(task);
    arrayTasks.push(task);
    //console.log(arrayTasks);
    listTask.innerHTML += task.render();

    inputTask.value = "";
}

function destroy(id){
    //console.log("id");
const filterTask = arrayTasks.filter((task) => task._id !== Number(id));

arrayTasks = filterTask;

Task.destroyRender(id);
}

/*function edit(id){
    //const newText = prompt("ingresa el nuevo nombre de la tarea");
    //console.log(newText);
    const oneTask = arrayTasks.find((task) => task._id === id);
    //console.log(oneTask);
    if (oneTask === undefined) return

    oneTask._name = newText;
    //oneTask._status = 2;
    //console.log(arrayTasks);
    Task.updateRender(id,newText);

} */

function edit(id){
    const element = document.querySelector(`#task-name-${id}`);
    element.style.display = "none";

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "5px";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "ingresa el nuevo nombre";

    const button = document.createElement("button");
    button.textContent = "Save";
    button.style.backgroundColor = "#ccc";
    button.onclick = function () {
        if (input.value === "") {
            alert("Debe escribir un nombre");
            return;
        }
        // updapte a nivel de array
        const oneTask = arrayTasks.find((task) => task._id === id);
        oneTask._name = input.value;

        // update a nivel visual
        element.textContent = input.value;
        element.style.display = "block";
        container.remove();
    }


    const buttonCancel = document.createElement("button");
    buttonCancel.textContent = "Cancel";
    buttonCancel.style.backgroundColor = "#ccc";
    buttonCancel.onclick = function () {
        container.remove();
        element.style.display = "block";
    }


    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(buttonCancel);

    element.parentNode.insertBefore(container, element.nextSibling);
}


