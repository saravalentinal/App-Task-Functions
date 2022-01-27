let fs = require("fs")

const leerArchivo = () => {
    let datos = fs.readFileSync("./tareas.json","UTF-8")
    return JSON.parse(datos)
}

function escribirJSON(ArrayDeTareas){
  let arrayJSON = JSON.stringify(ArrayDeTareas);
  fs.writeFileSync("./tareas.json",arrayJSON);
}

function guardarTarea(objetoTarea){
  let datosJSON = leerArchivo();
  datosJSON.push(objetoTarea);
  escribirJSON(datosJSON);
  console.log('Tarea guardada.')
}

function leerPorEstado(estado){
  let todasLasTareas = leerArchivo();
  let tareasQueCoincidenConElEstado = todasLasTareas.filter(function(elemento){
    return elemento.estado == estado;
  })
  return tareasQueCoincidenConElEstado;
}

module.exports = {leerArchivo,guardarTarea, leerPorEstado}