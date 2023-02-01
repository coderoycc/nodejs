const fs = require('fs')

        // SINCRONO

//Leer un archivo
/*const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')
console.log(first)
console.log(second.toString())

//Escribir un archivo
fs.writeFileSync('./data/trird.txt','Escritura de un nuevo archivo\nBetto')
//Escribir con APPEND flag: a
const contenido = "- Añadido de texto\n"
fs.writeFileSync('./data/fourth.txt', contenido,{flag: 'a'})
*/

        // ASINCRONO
fs.readFile('./data/first.txt', (err, data) => {
  if(err){
    console.log("Ocurrio un error", err)
  }
  console.log(data.toString())
  fs.writeFile('./data/new.txt', 'NUEVO ARCHIVO',{
    flag:'a'
  }, (err) =>{
    if(err){
      console.log("El archivo no se pudo escribir")
    }
  })
})


