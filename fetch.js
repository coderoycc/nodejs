import fetch from 'node-fetch'
function loadData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())//La respuesta lo convertimos a json
    .then(data => console.log(data)) //Lo que nos devuelva convertido lo mostramos
}

//Funcion asicrona
async function asinData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
}
loadData()