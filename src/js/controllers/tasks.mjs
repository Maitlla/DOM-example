import { addTask, saveTasks, getTasks } from "../models/domainObjects.mjs";
import { taskListHTMLSelector, addTaskInputSelector, addDeshacerButtonSelector, completedCSSClass } from "../models/defines.mjs"

export function task2HTMLElement(taskIndex, taskObject) {
    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");
    const inputEliminarHTMLItem = document.createElement("input"); // para borrar

    // Les proporciono valores 
    inputCheckboxHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = taskObject.completed;
    pHTMLItem.innerHTML = taskObject.taskName
    inputEliminarHTMLItem.type = "input" // para borrar
    inputEliminarHTMLItem.innerHTML = "Eliminar" // para borrar

    // Los anido                                            // para borrar
    listHTMLItem.append(pHTMLItem, inputCheckboxHTMLItem, inputEliminarHTMLItem);
    // Aplico estilos si está completada
    if (taskObject.completed) {
        listHTMLItem.classList.add(completedCSSClass);
        //inputEliminarHTMLItem.style.display = "none"   // para borrar
    } else {
        listHTMLItem.classList.remove(completedCSSClass);
        //inputEliminarHTMLItem.style.display = "block"  // para borrar
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
/*
// para borrar
inputEliminarHTMLItem.addEventListener("click", (event) => {
    updateClock();
    let totalTime = 10;
    function updateClock() {
        inputEliminarHTMLItem.innerHTML = totalTime;
        if (totalTime === 0) {
            const tasks = getTasks();
            tasks.splice(taskIndex, 1);
            saveTasks(tasks);
        } else {
            totalTime -= 1;
            // function setTimeout(function, milliseconds)
            setTimeout("updateClock()", 1000);
        }
    }
}
);  */

export function updateTasksHTML(CSSselector, tasksArray) {
    const listHTMLElement = document.querySelector(CSSselector);
    listHTMLElement.innerText = ""
    if (tasksArray.length > 0) {
        for (let index in tasksArray) {
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
    } else {
        addTask(newTask);
        input.value = "";
        updateTasksHTML(taskListHTMLSelector, getTasks());
    }
}

// añadido para punto 9
export function addDeshacerButtonClickHandler(event) {
    //console.log(event)
    const input = document.querySelector(addDeshacerButtonSelector);
    event.preventDefault()
    //input.classList.add(".hide") con esto aparecería el deshacer
    input.classList.add(".hide");
    console.log(event)
    updateTasksHTML(taskListHTMLSelector, getTasks());

}


export function buscador(){
    const searchInput = document.querySelector("#buscador");
    const tasksList = document.querySelector("#tasksList")
    for(let item of tasksList.children){
        let result = item.children[0].innerText.indexOf(searchInput.value);
        if (result >= 0){
            item.classList.remove("hidden")
        } else {
            item.classList.add("hidden")
        }
    }    
}







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

