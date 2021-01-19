// fibonacci n(7) =  [1,1,2,3,5,8,13]

function fib (n) {
  if(n <= 2){
    return 1
  } else {
    return fib(n-1)+fib(n-2)
  }
}

function fib2(n, memo={}) {
  if(n in memo) return memo[n] 
  if(n <= 2) return 1

  memo[n] = fib2(n-1, memo)+fib2(n-2, memo)
  return memo[n]
}

const num = 13
const result = fib(num)
const result2 = fib2(num)

console.log(`result ${num} = ${result}`)
console.log(`result ${num} = ${result2}`)

