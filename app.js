//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const color = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        listado.forEach(element => {
            console.log('============================'.green);
            console.log(element.descripcion);
            console.log('Estado: ', element.completado);
            console.log('============================'.green);
        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}