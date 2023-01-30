const path = require('path')

console.log(path.sep)

const filePath = path.join('dir1','dir2','dir3','archivo.jpg')
console.log(filePath)

console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve('module','resoluciones'))