// Module OS
const os = require('os') //Si no se pone una ruta específica NODE busca en subcarpeta del proyecto o en los módulos propios de NODE 

console.log(os.uptime())
console.log(os.platform())

console.log(os.totalmem())
console.log(os.freemem())

console.table({
  os: os.platform(),
  version: os.version(),
  totalMemory: os.totalmem()/1000000000+' GB'
})