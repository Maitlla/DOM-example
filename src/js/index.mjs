import { getTasks,saveTasks } from "./models/domainObjects.mjs";
import { updateTasksHTML, taskAddButtonClickHandler, botonDeshacerClickHandler ,showAreaTextForEdit, deleteButtonClickHandler} from "./controllers/tasks.mjs";
import { taskListHTMLSelector, addTaskButtonSelector, botonDeshacerSelector ,inputAreaEditHTMLItem, deleteButtonSelector } from "./models/defines.mjs"
import {vectorFTareasAcabadas} from "./helpers/funcionesHelpers.mjs";
/**
 * Punto de entrada al programa.
 * Al ser importado desde index.html como módulo
 * la ejecución se ve diferido al momento en que se
 * termine de cargar el documento HTML.
 */
updateTasksHTML(taskListHTMLSelector,getTasks());

document.querySelector(
    addTaskButtonSelector
).addEventListener(
    "click",
    taskAddButtonClickHandler
);

// Añadido por Maite - punto 9 deshacer eliminar - evento click del botón deshacer
document.querySelector(
    botonDeshacerSelector
).addEventListener(
    "click",
    botonDeshacerClickHandler
);

// Añadido por Samu para punto 2
document.querySelector(
    deleteButtonSelector
    ).addEventListener(
    "click",
    deleteButtonClickHandler
);

// añadido Israel para punto 1
document.querySelector(
    taskListHTMLSelector
    ).addEventListener(
        "click",
(event)=>{
    saveTasks(vectorFTareasAcabadas(getTasks))
});
// añadido Israel para punto 2
const concateno = "#" + inputAreaEditHTMLItem;
document.querySelector(
    concateno
    ).addEventListener(
        "click",
        (event)=>{
            showAreaTextForEdit
      });


















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



     

















