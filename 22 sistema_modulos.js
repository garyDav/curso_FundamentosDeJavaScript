// ¿Por que escribir módulos?
// 1. Encapsulamiento:
//   Cada parte de código se hace responsable de cumplir una tarea pero la cumple
//   bien, Cáda módulo debe ser pequeño y de tener una sola responsabilidad
// 2. Dependencias:
//   Mi módulo requiere otro modulo y si otra dependecia usa ese modulo
//   no hay que escribir doble, si no usarlo para cada dependecia, estas dependencias
//   tienen comunidad, son pequeños, ya tiene soporte, tiene test corriendo.

// SISTEMAS DE MÓDULOS
// Function scope (No es efectivo por la parte de dependencias)
var miModulo = (function miModulo() {
  var nombre = 'Sacha'
  function setNombre(otrNombre) {
    nombre = otroNombre
  }
  function getNombre() {
    return nombre
  }

  return {
    setNombre,
    getNombre
  }
})()

miModulo.setNombre('Erick')
console.log(miModulo.getNombre())

// Common JS (No es Asíncrono)
// triangle.js
module.exports = function area( base = 0, height = 0 ) {
  return base * height /2
}

// otroarchivo.js
const triangle = require('./triangle.js')

const base = 5
const height = 7
console.log(`El área de un triangulo de
  base ${base} y altura ${height} es: ${triangle(base, height)}`)

// AMD (si es Asíncrono, pero la sintaxis no es tan linda)
// triangle.js
define('tiangle', function() {
  return function triangle( base = 0, height = 0 ) {
    base * height /2
  }
})

// otroarchivo.js
require('./triangle.js', function(triangle) { // parámetro callback
  const base = 5
  const height = 7
  console.log(`El área de un triángulo de
    base ${base} y altura ${height} es: ${triangle(base, height)}`)
})

// Módulos de ES 2015
// square.js
import triangle from 'triangle'
export function area(x) {
  return x * x
}
export function perimetro(x) {
  return 4 * x
}
export function diagonal(x) {
  return triangle.hypotenuse(x, x)
}

// otroarchivo.js
import square from 'square'
const side = 7
console.log( `La diagonal de un cuadrado de ${side}x${side}
  mide: ${square.diagonal(side)}` )

//Nos permite importar módulos Asincronicamente
System
  .import('triangle')
  .then(triangle => {
    // ...
  })
  .catch(error => {
    // ...
  })



// System.js
// <script src="system.config.js"></script>
// <script>
//   // ..
//   System.config({
//     paths: paths,
//     map: map,
//     packages: packages,
//     transpiler: 'ts',
//     typescriptOptions: {
//       tsconfig: true
//     },
//     meta: {
//       typescript: {
//         exports: 'ts'
//       }
//     }
//   })
//
//   System
//     .import('app')
//     .then(() => { ... })
//     .catch(() => { ... })
// </script>
