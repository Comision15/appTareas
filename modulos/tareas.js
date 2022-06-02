const fs = require('fs');

const leerJSON = () => JSON.parse(fs.readFileSync('./data/tareas.json','utf-8'))

const crearTarea = (title) => leerJSON().push({
    title,
    status : 'pending'
});

module.exports = {
    leerJSON,
    crearTarea
}