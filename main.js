// Importacion con require de un archivo que está en otra parte
const c = require('./module/myModule')
const { nombre, vector } = require('./module/myModule')
//Al llamar a las importaciones se ejecuta el otro archivo

console.log(c)
console.log(nombre, vector)

// METODOS DE OPERACIONES
const operaciones = require('./module/operaciones')
console.log(operaciones.multiplica(10,10))
console.log(operaciones.suma(12,12))

