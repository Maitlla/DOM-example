import { addTask, saveTasks, getTasks } from "../models/domainObjects.mjs";
import { taskListHTMLSelector, addTaskInputSelector, completedCSSClass,inputAreaEditHTMLItem } from "../models/defines.mjs"

export function task2HTMLElement (taskIndex, taskObject) {
    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");
    const inputButtomEditHTMLItem = document.createElement("input");
    const inputEditHTMLItem = document.createElement("input");
    // Les proporciono valores 

    inputCheckboxHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = taskObject.completed;
    pHTMLItem.innerHTML = taskObject.taskName;

        //-> Botón editar
        inputButtomEditHTMLItem.type = "submit";
        inputButtomEditHTMLItem.value = "editar";
        //-> Área texto
        inputEditHTMLItem.type = "text";
        inputEditHTMLItem.id = inputAreaEditHTMLItem;
        inputEditHTMLItem.classList.add('ocultarAlgo');
    // Los anido
    listHTMLItem.append(pHTMLItem, inputCheckboxHTMLItem,inputButtomEditHTMLItem,inputEditHTMLItem);
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

export function updateTasksHTML (CSSselector, tasksArray) {
    const listHTMLElement = document.querySelector(CSSselector);
    listHTMLElement.innerText = ""
    if (tasksArray.length > 0) {
        for ( let index in tasksArray ) {
            listHTMLElement.appendChild(task2HTMLElement(index, tasksArray[index]))
        }
    } else {
        listHTMLElement.innerText = "Add your first task..."
    }

}

export function taskAddButtonClickHandler(event) {
    //console.log(event)
    const input = document.querySelector(addTaskInputSelector);
    event.preventDefault()
    const newTask = {
        taskName: input.value,
        completed: false,
    };
    //El método trim() elimina los espacios en blanco en ambos extremos del string
    if (input.value.trim() === "") { 
        alert('El campo no puede quedar vacío, la tarea tiene que tener un nombre');
    }else{
        addTask(newTask);
        input.value = "";
        updateTasksHTML(taskListHTMLSelector,getTasks());
    }
}

//Añadido por Maite - punto 9 deshacer eliminar - elimina tareas completadas
// filtra y guarda las tareas completadas y no completadas en arrays distintos
let tareasEliminadas = [];
function eliminarTareasCompletadas(){
    tareasEliminadas = getTasks().filter(function(tarea){ return tarea.completed;});
    const tareasNoEliminadas = getTasks().filter(function(tarea){ return !tarea.completed;});
    saveTasks(tareasNoEliminadas);  
    updateTasksHTML(taskListHTMLSelector,getTasks());
}
//Añadido por Maite - punto 9 deshacer eliminar - cuando haces click en deshacer las restaura a completadas 
export function botonDeshacerClickHandler(event) {
    //console.log(event)
    event.preventDefault()
    document.querySelector("#deshacer").classList.add("hidden");
    let todasLasTareas = getTasks();
    tareasEliminadas.forEach(element => {
        todasLasTareas.push(element);
    });
    saveTasks(todasLasTareas);  
    updateTasksHTML(taskListHTMLSelector,getTasks());    
}
//Añadido por Maite - punto 9 deshacer eliminar
// se añade el hidden para ocultar el div azul con el botón deshacer
function ocultarDeshacer() {
    document.querySelector("#deshacer").classList.add("hidden");
}; 

//Añadido por Samu - Maite - eliminar tareas completadas por separado o todas
// se quita el hidden y se ve el div azul y el botón deshacer durante 5 segundos
export function deleteButtonClickHandler(event) {
    event.preventDefault();
    eliminarTareasCompletadas();
    document.querySelector("#deshacer").classList.remove("hidden");
    setTimeout(ocultarDeshacer, 5000); 

}

//Añadido por Israel
export function showAreaTextForEdit(event){

    const elementoInput = event.target;
    console.log('elemento: ',elementoInput)
    elementoInput.classList.add('mostrarAlgo');

}

