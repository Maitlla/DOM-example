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


//Añadido por Maite - Posible función
export function addDeshacerButtonClickHandler(event) {
    //console.log(event)
    const input = document.querySelector(addDeshacerButtonSelector);
    event.preventDefault()
        //damos un atributo display:none que oculta el div
        input.value.display = (input.value.display === 'none') ? 'block' : 'none';
        updateTasksHTML(taskListHTMLSelector,getTasks());
    
}

//Añadido por Samu - Función eliminar completadas
export function DeleteCompletedButton(event) {
    //console.log(event)
    const elementsArray = getTasks()
    console.log(elementsArray);
}


//Añadido por Israel
export function showAreaTextForEdit(event){

    const elementoInput = event.target;
    console.log('elemento: ',elementoInput)
    elementoInput.classList.add('mostrarAlgo');

}


