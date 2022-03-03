// moked data
const tasks = [
    {
    taskName: "Sacar al perro",
    completed: true,
    },
    {
    taskName: "Ir a clase",
    completed: false,
    },
]

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

function taskListHTML () {
    let HTMLtext = "";
    for ( let item of tasks ) {
        const HTMLelemento = data2HTML(item.taskName, item.completed)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}

function insertTasksHTML () {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListHTML();
}

window.addEventListener('load',insertTasksHTML)






























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