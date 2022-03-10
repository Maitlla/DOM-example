export function vectorFTareasAcabadas(vectorObjetos){

    
    let vectorTareasAcabadas = [];
    let vectorTareasSinAcabar = [];

    for(const elemento of vectorObjetos()){
        elemento.completed ? vectorTareasAcabadas.push(elemento) : vectorTareasSinAcabar.push(elemento);
    }
    let vectorTotal = [...vectorTareasSinAcabar,...vectorTareasAcabadas];
    return vectorTotal;

}