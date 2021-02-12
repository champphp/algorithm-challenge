function allConstruct(target, wordBank) {
  if (target === '') return [[]]

  let totalArr = []

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length, target.length)
      const nunWaysForRest = allConstruct(newTarget, wordBank)
      const targetWays = nunWaysForRest.map(way => [word, ...way])
      totalArr.push(...targetWays)
    }
  }
  return totalArr
}

function allConstruct2(target, wordBank, memo={}) {
  if(target in memo) return memo[target]
  if (target === '') return [[]]

  let totalArr = []

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length, target.length)
      const nunWaysForRest = allConstruct(newTarget, wordBank, memo)
      const targetWays = nunWaysForRest.map(way => [word, ...way])
      totalArr.push(...targetWays)
    }
  }
  memo[target] = totalArr
  return totalArr
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
/**
 * [
  [ 'ab', 'cd', 'ef' ],
  [ 'ab', 'c', 'def' ],
  [ 'abc', 'def' ],
  [ 'abcd', 'ef' ]
]
 */
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
/**
 * []
 */
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
/**
 * [ 
 *  [ 'purp', 'le' ], 
 *  [ 'p', 'ur', 'p', 'le' ] 
 * ]
 */

 console.log('========v2===========')
console.log(allConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(allConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
