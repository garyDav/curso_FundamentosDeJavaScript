const gary = {
  nombre: 'Gary',
  apellido: 'Guzman'
}

function saludar( veces, uppercase ) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for( let i = 0; i < veces; i++ ) {
    console.log(str)
  }
}

// Si usamos bind, nos devuelve la función y no la ejecuta
// saludar.bind(gary, 3)

// Una manera de ejecutar la función pasandole el contexto y los parámetros
// saludar.call(gary, 3, true)

// Otra manera es usando apply, con la diferencia de colocar en un array los parámetros
saludar.apply( gary, [3, true] )

// Otra forma ...params desarma el array
// const params = [3, true]
// saludar.call(sacha, ...params)
