import { getTasks,saveTasks } from "./models/domainObjects.mjs";
import { updateTasksHTML, taskAddButtonClickHandler, botonDeshacerClickHandler ,showAreaTextForEdit} from "./controllers/tasks.mjs";
import { taskListHTMLSelector, addTaskButtonSelector, botonDeshacerSelector ,inputAreaEditHTMLItem } from "./models/defines.mjs"
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

// añadido para punto 9
document.querySelectorAll(
    botonDeshacerSelector
    ).addEventListener("click", botonDeshacerClickHandler);

// añadido para punto 2
/*document.querySelector(
    addTaskDeleteButtonSelector
    ).addEventListener(
    "click",
     DeleteCompletedButton
);*/

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
// Definir una función llamada tiempoDeshacer
const tiempoDeshacer = () => {
    window.alert("Deshacer");
};
//se la llama a los 10 segundos
setTimeout(tiempoDeshacer, 1000);  */



/*

Agregue una clase "myStyle" a un elemento:
    element.classList.add("myStyle");

Elimina la clase "myStyle" de un elemento:
    element.classList.remove("myStyle");

Alternar entre dos clases para un elemento:
    element.classList.toggle("newStyle");
  */


// Tener un botón o algo para eliminar
// Al eliminar:
// - Guardar la tarea en una variable antes de eliminarla de la lista de tareas
// - Mostrar el div para deshacer
// - Poner un timer setTimeout(function, milliseconds) que pasado X segundos oculte el div
// - Si se pulsa sobre el div de deshacer, se vuelve a meter la tarea que habíamos guardado en la variable en la lista
// - Igual aparte de la tarea hay que guardar también la posición en la que estaba para volverla a meter en la misma posición




//"Task_9_A_0.1_div con botón, mirado (display:none)_Deshacer eliminar tarea durante unos segundos"














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






     

















