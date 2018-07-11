// Forma Fácil
function suma(...numeros) {
	let acum = 0
	for(let i = 0; i < numeros.length; i++) {
		acum += numeros[i]
	}
	return acum
}
suma(4, 8, 12, 8954, 7, 9)

// Método que ayuda a resolver el problema de la acumulación
function suma(...numeros) {
	return numeros.reduce(function(acum, numero) {
		acum += numero
		return acum
	}, 0)

}
suma(4, 8, 12, 8954, 7, 9)

// Método que devuelve el doble de los números que pasamos por argumento
function dobles(...numeros) {
	return numeros.map(function(numero) {
		return numero * 2
	})
}
dobles(4, 8, 5, 6, 7, 9)

// Una mejor forma de escribir
const dobles=(...numeros) => numeros.map(numero => numero * 2)
dobles(4, 8, 5, 6, 7, 9)

// Método para encontrar números pares
function pares(...numeros) {
	const resultado = []
	const length = numeros.length
	for(let i = 0; i < length; i++) {
		const numero = numeros[i]
		if (numero % 2 == 0)
			resultado.push(numero)
	}
	return resultado
}
pares(1,2,3,4,5,6,7)

// Una mejor forma de hacerlo es
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
pares(1,2,3,4,5,6,7)
