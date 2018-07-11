function fibonacci() {
  let a = 0, b = 1
  return {
    next: function(reset) {
      if(reset) a = 0, b = 1
      let f = a
      a = b
      b = f + a
      return { value: f, done: false}
    }
  }
}

const fibo = fibonacci()
fibo.next().value // 0
fibo.next().value // 1
fibo.next().value // 1
fibo.next().value // 2
fibo.next().value // 3
fibo.next(true).value // 5
fibo.next().value // 0

// Para poder utilizar el iterador con un for
const fibo = {}
fibo[Symbol.irerator] = fibonacci

let i = 0
for(let value of fibo) {
  console.log(value)
  i++
  if( i>20 ) break
}
