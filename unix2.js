// https://github.com/MikeMcl/bignumber.js/
// Requiere el módulo bignumber
// 22:46
let BigNumber = require('bignumber.js')

// Resuleve el método unix
function unix() {
  let a = new BigNumber(1103515245),
      c = 12345,
      m = Math.pow(2,32),
      xn = new BigNumber(111)
  return {
    nextInt: function(reset) {
      if(reset) xn = new BigNumber(111)
      xn = new BigNumber( (a.multipliedBy(xn).plus(c)).mod(m))
      return { value: xn.toNumber(), done: false}
    },
    next: function() {
      let result = new BigNumber(this.nextInt().value).div(m).toFixed(5)
      return { value: result, done: false }
    }
  }
}

let ux = unix()
let x0 = 111
let periodo = 0
while(true) {
  let siguiente = ux.nextInt().value
  if( siguiente != x0 )
    periodo++
  else {
    console.log(siguiente)
    console.log(ux.nextInt().value)
    console.log(ux.nextInt().value)
    console.log(ux.nextInt().value)
    console.log(ux.nextInt().value)
    console.log(ux.nextInt().value)
    console.log(new Date())
    break
  }
}
console.log(`Periodo: ${periodo}`)
