// console.log("hoola 1") // Se ejecuta Primero
// setTimeout( ()=>{
//   console.log("hoola 2") //se ejecuta tercero, sea cual sea el tiempo
// }, 2000)
// console.log("hoola 3") //se ejecuta segundo

const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    return res.end("INICIO")
  }
  if(req.url === '/about'){
    //Blocking code
    for(let i = 0; i < 100000; i++){
      console.log(Math.random()*i)
    } //No acepta otras peticiones mientras se sigue ejecutando este for
    return res.end("MAS SOBRE MI")
  }
  res.end("NOT FOUND")
})

server.listen(3000)
console.log('Server en el puerto 3000')

