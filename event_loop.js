console.log("hoola 1") // Se ejecuta Primero
setTimeout( ()=>{
  console.log("hoola 2") //se ejecuta tercero, sea cual sea el tiempo
}, 2000)
console.log("hoola 3") //se ejecuta segundo
