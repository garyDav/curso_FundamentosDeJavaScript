function _handleError(err) {
  console.log(`Request failed: ${err}`)
}

async function getLuke() {
  try {
    const res = await fetch('https://swapi.co/api/people/1/')
    const luke = await res.json()
    const resHomeWorld = await fetch(luke.homeworld)
    luke.homeworld = await resHomeWorld.json()
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  } catch(err) {
    _handleError(err)
  }
}

/*Babel transpila nuestro código*/
// http://babeljs.io/repl/
/*Libreria babel-polyfill*/
// https://cdnjs.com/libraries/babel-polyfill
/*Probamos el código*/
// https://codepen.io/
