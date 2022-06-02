const {argv} = require('process');
const {leerJSON} = require('./modulos/tareas');

switch (argv[2]) {
    case "listar":
        leerJSON()
        break;

    default:
        break;
}