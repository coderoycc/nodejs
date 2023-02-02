const http = require('http')

const {createReadStream} = require('fs')

const server = http.createServer((req, res) => {
  const fileStream = createReadStream('./data/big.txt', {
    encoding:'utf-8'
  })
  // Listener de eventos
  fileStream.on('data', (chunk)=>{
    //usamos Pipe para enviar los datos (sin usar chunk) solo usando el destino (en vez de res.write('') o res.end(''))
    fileStream.pipe(res)
  })
  fileStream.on('error', (err)=>{
    console.log(err)
  })
})
server.listen(3000)
console.log('SERVER EN EL PUERTO 3000');