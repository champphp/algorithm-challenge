const bestSum = (target, number) => {
  const table = Array(target+1).fill(null)
  table[0] = []

  for (let i = 0; i <= target; i++) {
    if(table[i] !== null) {
      for (const num of number) {
        const combination = [...table[i], num]
        if(!table[i+num] || table[i+num].length > combination.length) {
          table[i+num] = combination
        }
      }
    }
    
  }
  return table[target]
}

console.log(bestSum(8, [5, 3, 4, 7]))
console.log(bestSum(100, [1,2,5,25]))
