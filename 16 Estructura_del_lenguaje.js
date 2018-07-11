//Las variables en javaScript no son fuertemente tipadas
//Una variable puede tomar distintos tipos de datos
var gary = 'Gary' // como cadena
gary = 24 // como número
gary = new Date() // como fecha

//Tambien podemos asignar valores mas complejos como ser
gary = function saludar() { alert('Hola') } // como funcion

//Mucho mas complejos como ser
gary = {
  nombre: 'Gary',
  apellido: 'Guzmán',
  edad: 24,
  saludar: function saludar() {
    alert(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
}

//Hay variables que no son tan variables
const edad = 26
edad++ //No podemos reasignar otro valor a la variable por que es constante
//Hay variables muy variables como ser
function saludar() {
  var nombre = 'Gary'
  alert(`Hola ${nombre}`)
}
nombre // undefined

//Si no declaramos la variable 'nombre' en la funcion
//entonces 'nombre' se declarará a un nivel más atras
//en este caso se declarará en el objeto 'window'
function saludar() {
  nombre = 'Gary'
  alert(`Hola ${nombre}`)
}
nombre // Gary
window.nombre === nombre // true
//En otros entornos como por ejemplo
//NODEJS se declarará en el objeto 'globals'
//IMPORTANTE: esto es algo que hay que evitar como buenos programadores
//no tenemos que contaminar al scope global tenemos que reducir al mínimo el scope de las variables

//De nuevo hay variables muy variables
var dias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

for (var i = 0; i < dias.length; i++) {
  console.log(`${dias[i]} es el día #${i + 1} de la semana`)
} //es igual que declarar 'i' fuera del for
i // 6, la variable 'i' tendría el último valor
i // en cambio si a la variable 'i' le declaro con 'let'
i //undefined

//Las palabras reservadas, no podemos declarar variables
//que tengan el nombre de las palabras reservadas de
//javascript o de ECMAScipt 5 o scrict mode

//Usar el ';' o no...
//En JS hay algo que se llama IIFE
//Inmmediately Invoked Function Expression
//Nos permite...
const nombre = 'Gary'
(function saludar() {
  console.log(`Hola ${nombre}`)
})() //el primer '()' es para declalar la funcion
//todo lo que este dentro es otro scope
//el segundo '()' es para llamar a penas declaramos la funcion
