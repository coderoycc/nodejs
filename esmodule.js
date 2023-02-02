// Importaciones de distinta manera
import operaciones from './module/operaciones.js'
import {nose} from './module/operaciones.js'
const x = operaciones.suma(12,13)
const y = nose(12,13)
console.log(y+" = "+x)