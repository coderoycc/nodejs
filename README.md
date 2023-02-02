# NODE JS

Permite ejecutar archivos JavaScript del lado del servidor

## REPL
REPL proporciona una forma interactiva de ejecutar JavaScript y ver los resultados.
La consola interactua directamente con el sistema operativo

* Paa guardar todo lo que se ejecutó en la consola interactiva se usa .save nombre.js
* Para ver más sobre los comandos se usa .help

## Ejecutar archivos con node
* Solo es necesario poner **node nombreArchivo.js**

## Objetos globales
Al igual que en el navegador se interactua con los atributos propios, en NODE se puede interactual con elementos del sistema operativo.
* __dirname: indica la ruta del **archivo actual**
* __filename: indica la ruta completa incluyendo el nombre del archivo actual
* module: propiedades de rutas del archivo actual. Nos sirver para interactuar con archivos de diferentes partes
* require: objeto que permite trabajar en diferentes directorios

### MODULES
Para usar Module para exportar partes del código de un archivo 
Usamos 

```js
module.exports = varible_a_exportar;
//O
module.exports.llave_nueva = variable
//O
module.exports = {
  variable1,
  variable2,
  //....
}
```
Lo que en realidad se hace es usar el objeto module que contiene a una propiedad EXPORTS.

### REQUIRE
Es utilizado para importar codigo desde otros archivos
Usamos
```js
require('ruta del archivo que se necesita SIN El .JS')
//O
const {var1, var2, var3} = require('ruta')

const os = require('os') 
//Si no se pone una ruta específica NODE busca en subcarpeta del proyecto o en los módulos propios de NODE 
```

### MODULO OS
Existe el modulo OS que proporciona información del sistema operativo host.
Algunas propiedades interesantes son:

```js
console.log(os.uptime()) 
//muestra el tiempo activo de la PC

console.log(os.platform())
// Muestra la plataforma (SO)

console.log(os.totalmem())
//Muetra la memoria total RAM

console.log(os.freemem())
//Muestra la memoria disponible RAM

//mostrar todo como una tabla
console.table({
  os: os.platform(),
  version: os.version(),
  totalMemory: os.totalmem()
})
```
### MODULO PATH
Nos permite trabajar con las rutas dependiendo del sistema operativo, el modulo path tiene métodos interesantes. (Ver en path.js)
* Path.sep Nos muestra el separador dependiendo el SO
* Path.join(...rutas): nos permite unir varias carpetas/direcciones de forma válida
* path.basename('ruta'): nos devuelve el archivo de una ruta (.jpg | .py)
* path.dirname('ruta'): nos devuelve la ruta sin el archivo (asdas/asass)
* path.resolve('directorio'): devuelve la ruta base desde raiz hasta el neuvo *directorio*
* path.parse('ruta'): devuelve un objeto con varias características de la ruta

### MODULO FS (FileSystem)
Nos permite interactuar con archivos, leer, eliminar, modificar etc..
`const fs = require('fs')`
* fs.readFileSync('ruta del archivo', 'utf-8') leer un archivo (de manera sincrona)
* fs.writeFileSync('ruta','contenido') escribir un archivo (de manera sincrona)
  - Si existe el archivo se vuelve a crear (se sobreescribe).
  - Se usa `flag: a` en caso de necesitar mantener el texto anterior y aumentar nuevo texto (ver fs.js)
<hr>

* fs.readFile('ruta', 'utf-8', (err, data) => {}) leer de manera asincrona
* fs.writeFile('ruta', 'contenido', {flags}, (err)=>{}) escribir de manera ascincrona

### MODULO HTTP
Nos permite manejar recibir peticiones y devolver respuestas.
`const http = require('http')`
* Crear servidor: `http.createServer((request, response) =>{})`
  - request: obtiene todos los datos de una petición
  - response: es la respuesta del servidor 
  - Ambas contienen varios métodos para interactuar.

## NPM (npmjs.com)
* `npm install paquete` para instalar algun paguete de npm
* `npm i` tambien sirve para instalar un paquete
* `npm remove paquete` sirve para desinstalar algun paquete
* `npm install paquete -D` instala los paquetes unicamente para es entorno de desarrollo (Quiere decir que no es necesario en producción, es más como una herramienta para el desarrollador) '_nodemon_ es un ejemplo'
* `npm install paquete -g` instala los paquetes globalmente (ordenador)
* `npm init` permite crear el archivo package.json de manera mas extendida (consola). 
<br>

**Usar script para ejecutar un comando**
* Se edita el archivo package.json
* Se pone: "scripts": { "abreviado": "Comando a ejecutar" }
* Para correr el comando se usa
  - npm run abrevidado

## NPX 
Se usa para usar paquetes sin tener que instalarlos como dependencia Global o de desarrollo. Algunos paquetes usados son
* `npx serve carpeta` comando que sirve para mostrar los cambios instantaneamente. 
* `npx serve -s Carpeta`
* `npx http-server carpeta/archivo` mismo que serve
* `npx nodemon` paquete que ya se encuentra instalado, pero es en linea de comandos (npx busca el node_modules/.bin y lo ejecuta) y si no se encuentra descarga el paquete
**npm root -g** para ver donde se encuentran paquetes instalados de manera global

## PROMESAS EN JS
Nos permiten ejecutar código asíncrono, saber si terminó de ejectarse correctamente o si sucedió algún error.
* `Promise` es un objeto en JavaScript, el mismo puede funciona con una función de dos parámetros.
  - resolve: que retorna el valor final esperado si la promesa no tuvo errores.
  - reject: que retorna el error si ocurrió algo en la ejecución de la promesa
* Ejemplo: Ver archivo promise.js

## AWAIT ASYNC
Una nueva manera de escribir promesas
* Necesitamos una función que sea asíncrona usando `async function nombre(){}`
* Para obtener resultado también se necesita una funcion asincrona
* El resultado de la funcion se puede guardar en una variable con la palabra `await`
  - `const x = await funcion()` donde la funcion es asincrona (async)
* Ver await.js

## PROMISIFY
Una utilidad `util` de javascript que permite crear una función asíncrona (que devuelve promesas) simplemente enviando la función asincrona `promisify(readFile)`, con readFile función para leer archivos asíncronamente.

## EVENTS JS
Existen varios eventos con los que se puede trabajar. Un emitidor de eventos es EventEmitter.
* Se debe importar desde `events` de NODE
* Después de instancia un nuevo objeto 
* Con el metodo `ON` se escucha el evento
* Con el método `EMIT` se emite un evento
* Ver ejemplo en events.js
