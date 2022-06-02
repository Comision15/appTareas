const {argv} = require('process');
const {leerJSON} = require('./modulos/tareas');

switch (argv[2]) {
    case "listar":
        let tareas = leerJSON();
        tareas.forEach(tarea => {
            console.log(`(${tarea.id}) ${tarea.title} - ${tarea.state}`);
        });
        break;

    default:
        break;
}