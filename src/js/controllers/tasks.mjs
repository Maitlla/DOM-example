import { tasksStorageKey } from "../models/domainObjects.mjs";
import { taskListHTMLSelector } from "../models/defines.mjs"

export function getTasks () {
    const stringData = localStorage.getItem(tasksStorageKey) || "[]";
    return JSON.parse(stringData);
}

export function saveTasks(tasksArray) {
    const stringData = JSON.stringify(tasksArray)
    return localStorage.setItem(tasksStorageKey, stringData);
}

export function addTasks(taskObject) {
    const tasks = getTasks() || [];
    tasks.push(taskObject);
    saveTasks(tasks);
}

/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Descripcion de la tarea
 * @param {boolean} completed - Estado de tarea
 * @returns {string} - <li> HTML resultante
 */
 export function task2HTMLElement (task) {

    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");

    // Les proporciono valores 
    inputCheckboxHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = task.completed;
    pHTMLItem.innerHTML = task.taskName

    // Los anido
    listHTMLItem.appendChild(pHTMLItem);
    listHTMLItem.appendChild(inputCheckboxHTMLItem);

    // Añado el manejador de eventos
    inputCheckboxHTMLItem.addEventListener(
        "click",
        () => { console.log(listHTMLItem)}
    )

    return listHTMLItem
}

export function replaceTasks (selector, tasksArray) {
    const listHTMLElement = document.querySelector(selector);
    listHTMLElement.innerHTML = ""
    for ( let item of tasksArray ) {
        listHTMLElement.appendChild(task2HTMLElement(item))
    }
}