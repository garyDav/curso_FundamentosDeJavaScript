/*
function saludarGomez(nombre) {
	console.log(`Hola ${nombre} Gomez`)
}
function saludarPerez(nombre) {
	console.log(`Hola ${nombre} Perez`)
}
saludarGomez('Pedro')
saludarGomez('Juan')
saludarGomez('Laura')
saludarGomez('Mónica')

saludarPerez('Dario')
saludarPerez('Martin')
saludarPerez('Julieta')
*/

function saludarFamilia(apellido) {
	return function saludarMiembroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')
const saludarRomero = saludarFamilia('Romero')

saludarGomez('Pedro')
saludarGomez('Juan')
saludarGomez('Laura')
saludarGomez('Mónica')

saludarPerez('Dario')
saludarPerez('Martin')
saludarPerez('Julieta')

saludarRomero('Jorge')

// Ejercicio de los prefijos
const makePrefixer = prefijo => valor => `${prefijo}-${valor}`
const prefijoRe = makePrefixer('re')
const prefijoIn = makePrefixer('in')
console.log(prefijoRe('bueno'))
console.log(prefijoRe('malo'))

console.log(prefijoIn('creíble'))









