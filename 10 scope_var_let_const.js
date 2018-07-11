// Scope, el conjunto de variables y funciones al cual nosotros podemos acceder
// en una determinada línea de código.

// Closures, son funciones que recuerdan el Scope, (El entorno) en el cual fueron creadas
// y pueden acceder a todas las variables, a todas las funciones que pertenecen a ese
// Scope, pero con los valores que tiene esas variables, esas funciones, al momento
// de que invocamos a esa función Closures.

/////// nombre será en este caso una variable global
var nombre = 'David'
function saludar() {
	console.log(`Hola ${nombre}`)
}

saludar()

/////// La variable global nombre actúa como un Scope global
var nombre = 'David'
function saludar(nombre) {
	//La variable nombre se convierte el Scope para la función saludar (Variable local)
	console.log(`Hola ${nombre}`)
}

saludar('Erick')
console.log(`La variable nombre tiene el valor: ${nombre}`)

////// La variable global nombre actúa como un Scope global
var nombre = 'David'
function saludar() {
	//La variable nombre se convierte el Scope para la función saludar (Variable local)
	var nombre = 'Erick'
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`La variable nombre tiene el valor: ${nombre}`)

////// La variable global nombre actúa como un Scope global
var nombre = 'David'
function saludar() {
	// Si solo modificamos la variable Scope global, Se modifica la variable
	// como nombre no esta declarada en esta función, empezara a buscar a la de arriba
	nombre = 'Erick'
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`La variable nombre tiene el valor: ${nombre}`)

////// La variable global nombre actúa como un Scope global
var nombre = 'David'
function saludar() {
	// Al definir una variable con la palabra var, lo hace en el Scope
	// de la función, como si al principio ubíeramos declarado la variable,
	// todas las variables que se declaran dentro de la funcíon, se suben
	// a la primera línea
	if(true)
		var nombre = 'Erick'
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`La variable nombre tiene el valor: ${nombre}`)

///// Función que saluda 10 veces
function saludar10(nombre) {
	// JS lo interpreta, todas las declaraciones de variables con la palabra
	// reservada 'var' las sube a la primera línea de la función,
	// entonces es como si la variable la ubiésemos delarado arriba
	// y segir usando la variable en todo el Scope de la función
	for (var i = 0; i < 10; i++) {
		console.log(`Hola ${nombre}`)
	}
	console.log(`El valor de i es ${i}`)// El valor de i es 10
}
saludar10('David')

///// La mejor solucíon seria
//Declaramos una variable para el Scope, donde se utiliza, para el Scope del bloque
function saludar10(nombre) {
	for(let i = 0; i < 10; i++) {
		console.log(`Hola ${nombre}`)
	}
	// como definimos 'i' con let entonces, la variable se crea y se usa en el Scope
	// dentro del bloque de for, y se destruye cuando sale del ciclo, 
	// lo que produce que me salga error en la variable 'i'
	console.log(`El valor de i es: ${i}`) // ERROR: i is not defined
}
saludar10('David')

//// Espera aún podemos mejorar
function saludarADavid10() {
	const nombre = 'David'
	for(let i = 0; i < 10; i++) {
		console.log(`Hola ${nombre}`)
	}
}
saludarADavid10()
