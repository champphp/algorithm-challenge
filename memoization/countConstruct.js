/**
 * O(n^m *2) time
 * O(m^2) space
 */
function countConstruct(target, wordBank) {
  if( target === '') return 1
  let total = 0
  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const newTarget = target.slice(word.length, target.length)
      const nunWaysForRest = countConstruct(newTarget, wordBank) 
      total += nunWaysForRest
    }
  }

  return total
}

/**
 * O(n*m^2) time
 * O(m^2) space
 */
function countConstruct2(target, wordBank, memo = {}) {
  if(target in memo) return memo[target]
  if( target === '') return 1
  let total = 0
  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const newTarget = target.slice(word.length, target.length)
      const nunWaysForRest = countConstruct2(newTarget, wordBank, memo) 
      total += nunWaysForRest
    }
  }
  memo[target] = total
  return total
}

console.log(countConstruct('abcdef' , ['ab', 'abc', 'cd', 'def', 'abcd'] ))
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'] ))
console.log(countConstruct('purple', ['purp','p','ur','le','purpl']))


console.log(countConstruct2('abcdef' , ['ab', 'abc', 'cd', 'def', 'abcd'] ))
console.log(countConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'] ))
console.log(countConstruct2('purple', ['purp','p','ur','le','purpl']))
