class Persona {
  constructor( nombre, amigos=[] ) {
    this.nombre = nombre
    this.amigos = amigos
  }
  // Una solución a this.nombre es: capturar antes el valor de this
  // listarAmigos() {
  //   const _this = this
  //   this.amigos.forEach(function(amigo) {
  //     console.log(`Hola, mi nombre es ${_this.nombre} y soy amigos de ${amigo}`)
  //   })
  // }

  // Otra manera es pasarle this por bind a la función
  // listarAmigos() {
  //   this.amigos.forEach(function(amigo) {
  //     console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
  //   }.bind(this))
  // }

  //Otra solucion es utilizar arrow function (Mejor Solución)
  listarAmigos() {
    this.amigos.forEach( (amigo)=>console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`) )
  }

}

const gary = new Persona('Gary', ['Pedro','Juan','Pepe'])
