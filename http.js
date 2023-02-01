const http = require('http')

//creamos nuestro servidor
const server = http.createServer((request, response) => {
  console.log(request.url)
  if(request.url === '/'){
    response.write('<h1>Bienvenido al servidor de Roberto</h1>')
    return response.end() //permite terminar la peticion sin saltar a la siguiente linea
  }
  if(request.url === '/about'){
    response.write('<h1>Mas sobre Mi</h1>')
    return response.end()
  }
  response.write(`
    <h1>Not Found</h1>
    <p>No encontrada</p>
    <a href="/">Volver</a>
  `)
  response.end()
})
server.listen(3000) //Para que se ejecute en el puerto 3000

console.log("Ejecutando en el puerto 3000")