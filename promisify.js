const {readFile} = require('fs')
const {promisify} = require('util')

// Tambien existen promesas ya implementadas en FS
// const {readFile} = require('fs/promises')

//Creamos la función asíncrona de lectura
const readFilePromise = promisify(readFile)
//Esa sentencia convierte a READFILE en una promesa, sn escribir tanto código 
// La función creada nos ofrecerá las mismas características de READFILE

async function read() {
  try{
    const result = await readFilePromise('./data/first.txt', 'utf-8')
    console.log(result)
  }catch(err){
    console.log("OCURRIO UN ERROR\n", err)
  }
}
read()