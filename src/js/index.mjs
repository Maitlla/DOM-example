import { replaceInnetHTML } from "./lib/auxiliar.mjs";
import { tasks } from "./models/generic.mjs";

/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Descripcion de la tarea
 * @param {boolean} completed - Estado de tarea
 * @returns {string} - <li> HTML resultante
 */
function data2HTML (taskName, completed) {
    let completedHTML = completed ? "checked" : "";
    const taskHTML = `
    <li>
        <p>${taskName}</p>
        <input type="checkbox" name="completed" id="" ${completedHTML}>
    </li>
    `;
    return taskHTML
}

/**
 * Construye un los elementos de una lista HTML
 * a partir de un array de objentos de tareas.
 * @param {*} taskArray 
 * @returns {string} - Sucesión de elementos <li>
 */
function taskListHTML (taskArray) {
    let HTMLtext = "";
    for ( let item of taskArray ) {
        const HTMLelemento = data2HTML(item.taskName, item.completed)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}

/**
 * Punto de entrada al programa.
 * Al ser importado desde index.html como módulo
 * la ejecución se ve diferido al momento en que se
 * termine de cargar el documento HTML.
 */
 const html = taskListHTML(tasks);
 replaceInnetHTML("#tasksList",html);






























/*
for ( let idx = 0 ; idx < tasks.length ; idx ++ ) {
    tasks[idx].taskName
}
*/

//const taskHTML1 = '<li>' + taskName + '</p><input type="checkbox" name="completed" id=""' + completed + '></li>';

/*
const mappedTask = tasks.map(
    (task) => `
        <li>
            <p>${task.taskName}</p>
            <input
                type="checkbox"
                name="completed"
                id="" ${task.completed ? "checked" : ""}>
        </li>`
)

console.log("With map:", JSON.stringify(mappedTask))
*/