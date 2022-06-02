const fs = require('fs');

const leerJSON = () => JSON.parse(fs.readFileSync('./data/tareas.json','utf-8'))



module.exports = {
    leerJSON
}