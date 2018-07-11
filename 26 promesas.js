/*
La promesa puede estar en tres estados:
1. pending (pendiente)
2. resolve (resuelto)
3. reject (algo malo paso)
*/
/* AJAX manualmente */
function get(URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      const DONE = 4
      const OK = 200

      if(this.readyState === DONE) {
        if(this.status === OK) {
          resolve(JSON.parse(this.responseText))
        } else {
          reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
        }
      }
    }

    xhr.open('GET', URL)
    xhr.send(null)
  })
}

function _handleError(err) {
  console.log(`Request failed: ${err}`)
}

let luke
get('https://swapi.co/api/people/1/')
  .then((response) => {
    luke = response
    return get(luke.homeworld)
  })
  .then((homeworld) => {
    luke.homeworld = homeworld
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch(err => _handleError(err))

/*Usando fetch*/
let luke
fetch('https://swapi.co/api/people/1/')
  .then(response => response.json())
  .then(json => {
    luke = json
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then(json => {
    luke.homeworld = json
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch(err => _handleError(err))
