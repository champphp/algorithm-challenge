const fin = (n) => {
  const table = Array(n+1).fill(0)
  table[1] = 1
  for(let i = 0; i <= n; i++) {
    table[i+1] += table[i]
    table[i+2] += table[i]
  }

  return table[n]
}

console.log(fin(6))
console.log(fin(7))
console.log(fin(8))
console.log(fin(50))