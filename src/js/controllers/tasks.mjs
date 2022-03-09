import { addTask, saveTasks, getTasks } from "../models/domainObjects.mjs";
import { taskListHTMLSelector, addTaskInputSelector, addDeshacerButtonSelector, completedCSSClass } from "../models/defines.mjs"

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

export function addDeshacerButtonClickHandler(event) {
    //console.log(event)
    const input = document.querySelector(addDeshacerButtonSelector);
    event.preventDefault()
        //damos un atributo display:none que oculta el div
        input.value.display = (input.value.display === 'none') ? 'block' : 'none';
        updateTasksHTML(taskListHTMLSelector,getTasks());
    
}




// Tener un botón o algo para eliminar
// Al eliminar:
// - Guardar la tarea en una variable antes de eliminarla de la lista de tareas
// - Mostrar el div para deshacer
// - Poner un timer setTimeout(function, milliseconds) que pasado X segundos oculte el div
// - Si se pulsa sobre el div de deshacer, se vuelve a meter la tarea que habíamos guardado en la variable en la lista
// - Igual aparte de la tarea hay que guardar también la posición en la que estaba para volverla a meter en la misma posición




//"Task_9_A_0.1_div con botón, mirado (display:none)_Deshacer eliminar tarea durante unos segundos"

