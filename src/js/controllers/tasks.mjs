import { tasksStorageKey } from "../models/domainObjects.mjs";
import { taskListHTMLSelector, addTaskInputSelector, completedCSSClass } from "../models/defines.mjs"

export function updateTasksHTML (CSSselector, tasksArray) {
    const listHTMLElement = document.querySelector(CSSselector);
    listHTMLElement.innerText = ""
    for ( let index in tasksArray ) {
        listHTMLElement.appendChild(task2HTMLElement(index, tasksArray[index]))
    }
}

export function getTasks () {
    const stringData = localStorage.getItem(tasksStorageKey) || "[]";
    return JSON.parse(stringData);
}

export function saveTasks(tasksArray) {
    const stringData = JSON.stringify(tasksArray)
    localStorage.setItem(tasksStorageKey, stringData);
    updateTasksHTML(taskListHTMLSelector, tasksArray)
}

export function addTask(taskObject) {
    const tasks = getTasks();
    tasks.push(taskObject);
    saveTasks(tasks);
}

export function taskAddButtonClickHandler (event) {
    //console.log(event)
    const input = document.querySelector(addTaskInputSelector);
    event.preventDefault()
    const newTask = {
        taskName: input.value,
        completed: false,
    };
    addTask(newTask);
    updateTasksHTML(taskListHTMLSelector,getTasks());
}

 export function task2HTMLElement (taskIndex, taskObject) {
    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");
    // Les proporciono valores 
    inputCheckboxHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = taskObject.completed;
    pHTMLItem.innerHTML = taskObject.taskName
    // Los anido
    listHTMLItem.append(pHTMLItem, inputCheckboxHTMLItem);
    // Aplico estilos si está completada
    if (taskObject.completed) {
        listHTMLItem.classList.add(completedCSSClass);
    } else {
        listHTMLItem.classList.remove(completedCSSClass);
    }
    // Añado el manejador de eventos
    inputCheckboxHTMLItem.addEventListener(
        "click",
        (event) => {
            const tasks = getTasks();
            tasks[taskIndex].completed = event.target.checked;
            saveTasks(tasks);
        }
    );
    return listHTMLItem
}