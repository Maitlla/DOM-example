
/**
 * Reemplaza el contenido de un elemento HTML
 * @param {string} selector - Selector CSS para un elemento.
 * @param {string} html - HTML que reemplazará al contenido actual del elemento.
 */
export function replaceInnetHTML (selector, html="") {
    const element = document.querySelector(selector);
    element.innerHTML = html
}