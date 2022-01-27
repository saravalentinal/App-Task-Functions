let process = require("process")
let {leerArchivo,guardarTarea, leerPorEstado} = require("./funcionesDeTareas")

let argumentos = process.argv 
let miComando = argumentos[2] 

switch (miComando) { 
    case "listar":
        let datosJSON = leerArchivo()
        datosJSON.forEach(function(datos){
            console.log(datos.titulo);
        })
        break;
    case "crear":
        let tituloNuevaTarea = argumentos[3];
        let tareaPendiente = {
            titulo : tituloNuevaTarea,
            estado : "pendiente",
        }
        guardarTarea(tareaPendiente);
        break;
        
    case "filtrar":
        let estadoIngresado = argumentos[3];
        let arrayDeTareasFiltradas = leerPorEstado(estadoIngresado);
        arrayDeTareasFiltradas.forEach(function(elemento){
            console.log(elemento.titulo);
        })
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    
    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}

