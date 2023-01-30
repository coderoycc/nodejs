//Realizamos exportaciones desde este archivo para que otros archivos lo puedan usar

const nombre = 'Roberto'
const vector = [12, 89, 76, 99]
const user = {
  name:'Franco',
  edad:67
}
console.log("Es una importaciooooooooooon")


//exportamos con MODULE
module.exports = {
  nombre,
  vector,
  user
}