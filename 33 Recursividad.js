let veces = 0
function fibonacci(num, memo = {}) {
  if(memo[num]) return memo[num]
  if(num==1) return 0
  if(num==2) return 1
  veces++

  return memo[num] = fibonacci(num-1, memo) + fibonacci(num-2, memo)
}
console.log('despues')

fibonacci(1) // 0
fibonacci(2) // 1
fibonacci(3) // 1
fibonacci(4) // 2
fibonacci(5) // 3
fibonacci(6) // 5
fibonacci(7) // 8
fibonacci(8) // 13

fibonacci(8) = fibonacci(7) + fibonacci(6)
