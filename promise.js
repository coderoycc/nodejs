const {readFile} = require('fs')

const getText = (pathFile) => {
  return new Promise((resolve, reject) =>{
    //leemos el archivo asíncronamente
    readFile(pathFile, 'utf-8', (err, data) => {
      if(err){
        reject(err) //en caso de existir un error
      }
      resolve(data) //en caso de haber leido correctamente
    })
  })
}

getText('./data/first.txt') //Esta función esta devolviendo una promesa
  .then((result) => console.log(result)) //Si todo sale bien obtenemos el valor que tenia que devolvernos la función
  .then( () => getText('./data/new.txt')) //despues de que haya terminado podemos leer otro valor
  .then( (result) => console.log(result)) //Si de la segunda llamada salio bien la operación mostramos el resultado
  .catch( error => console.log('ERROR', error)) //en caso que no haya resultado bien en alguno de los tres THEN mostramos el error 