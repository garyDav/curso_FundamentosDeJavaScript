// canal 70 "RETO" sábado 4:30
function* fibonacci() {
  let a = 0, b = 1
  while(true) {
    let f = a
    a = b
    b = f + a
    let reset = yield f
    if(reset) a = 0, b = 1
  }
}

const fibo = fibonacci()
fibo.next() // 0
fibo.next() // 1
fibo.next() // 1
fibo.next() // 2
fibo.next() // 3
fibo.next(true) // 0
fibo.next() // 1
fibo.next() // 1
fibo.next() // 2
