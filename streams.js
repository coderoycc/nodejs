// const {writeFile} = require('fs/promises')

// //Creamos un archivo demasiado grande
// const createFile = async ()=>{
//   await writeFile('./data/big.txt', 'HOLA-AMIGO'.repeat(1000000))
// }
// createFile()

// definimos lectura mediante EVENTOS 
const {createReadStream} = require('fs')

const stream = createReadStream('./data/big.txt', 'utf-8') //tiene más flags 

// Mediante eventos recibimos porciones de datos del archivo con evento 'data'
stream.on('data', (chunk) =>{
  console.log(chunk)
})
//Mediante el evento END sabemos que ya acabó de leer todo el documento
stream.on('end', ()=>{
  console.log('TERMINÉ...')
})

//Mediante el evento error podemos actuar si ocurrio un error
stream.on('error', (err)=>{
  console.log('OCURRIO un ERROR\n', err)
})

