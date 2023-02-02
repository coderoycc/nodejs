const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//Definimos el listener
customEmitter.on('nombre_emitter', ()=>{
  console.log("Se emitió el evento NOMBRE_EMITTER")
})
//Definimos otro listener con datos
customEmitter.on('data', (data)=>{
  console.log("Se emitió evento con ", data)
})

//Emitimos un evento
customEmitter.emit('nombre_emitter')

//emitimos otro evento con datos
customEmitter.emit('data', "Hola Amigo")