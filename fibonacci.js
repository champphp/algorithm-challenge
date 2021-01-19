
let countfib = 0
let countfib2 = 0

function fib (n) {
  countfib++
  if(n <= 2){
    return 1
  } else {
    return fib(n-1)+fib(n-2)
  }
}

function fib2(n, memo={}) {
  countfib2++
  if(n in memo) return memo[n] 
  if(n <= 2) return 1

  memo[n] = fib2(n-1, memo)+fib2(n-2, memo)
  return memo[n]
}

const num = 13
const result = fib(num)
const result2 = fib2(num)

console.log(`result ${num} = ${result}, time ${countfib}`)
console.log(`result ${num} = ${result2}, time ${countfib2}`)

