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

//recibimos los resultados
async function read(){
  try{
    const result = await getText('./data/first.txt')
    console.log(result)
    const result2 = await getText('./data/new.txt')
    console.log(result2)
    //Cuando ocurre un error el codigo de abajo ya no se ejecuta
    // throw new Error('Ocurrio un error inesperado')
    const nuevo = await getText('./data/second.txt')
    console.log(nuevo)
  }catch(error){
    console.log(error)
  }
}

read()