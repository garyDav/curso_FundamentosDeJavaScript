// http://facebook.github.io/immutable-js/

let gary = {nombre:'gary', edad:'24'}
let otroGary = gary

gary === otroGary // true, ambas variables apunta a la misma posición de la memória

// También aplica a funciones
let persona = {nombre:'gary', edad:'24'}
let contador = 0
const cumpleanos = function(persona) {
  contador++ // No son variables locales, afectan a las globales
  persona.edad++ // No son variables locales, afectan a las globales
}

// lo que se debe hacer es copiar el objeto
function(persona) {
  // de esta forma no tienen efecto de lado
  const clone = Object.assign({}, persona)
  clone.edad++
  return clone
}

// explicando el tripe igual
let a = 5
let b = '5'
a == b // true
a === b // false, se le indica a Javascript que no aplique el concepto de Coercion

// explicando sobre debounce
// https://davidwalsh.name/javascript-debounce-function
