import { replaceTasks, getTasks, addTasks } from "./controllers/tasks.mjs";
import { taskListHTMLSelector, addTaskButtonSelector } from "./models/defines.mjs"

const input = document.querySelector("#taskInput");
const button = document.querySelector("#addTasksButton");

function taskAddButtonClickHandler (event) {
    //console.log(event)
    event.preventDefault()
    const newTask = {
        taskName: input.value,
        completed: false,
    };
    addTasks(newTask);
    replaceTasks(taskListHTMLSelector,getTasks());
}

/**
 * Punto de entrada al programa.
 * Al ser importado desde index.html como módulo
 * la ejecución se ve diferido al momento en que se
 * termine de cargar el documento HTML.
 */
replaceTasks(taskListHTMLSelector,getTasks());

button.addEventListener("click", taskAddButtonClickHandler);




















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