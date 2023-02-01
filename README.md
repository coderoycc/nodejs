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
