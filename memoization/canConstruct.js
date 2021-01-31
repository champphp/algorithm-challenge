/* 
  * canConstruct(target, wordBank) return boolean
  * target = string
  * wordBank = array[string]
  * เช็คที่ wordBank มีคำของ target ใน array 
  * โดยสามารถรวมคำใน wordBank เป็นคำ target ได้
  * abcdef , [ab, abc, cd, def, abcd] =>
  * abc + def = abcdef , => true
  * skateboard, [bo, rd, ate, t, ska, sk, boar] => false 
  * เพราะไม่มีค่าใดเท่ากับ skateboard
  * 
  * 
*/

/*
  * target length = m
  * wordBank array = n
  * O(n^m * m) time
  * O(m^2) space
*/
function canConstruct(target, wordBank) {
  if( target === '') return true

  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const newTarget = target.slice(word.length, target.length)
      // console.log(word ,newTarget)
      if(canConstruct(newTarget, wordBank) === true) {
        return true
      }
    }
  }

  return false
}

/*
  * target length = m
  * wordBank array = n
  * O(n * m^2 ) time
  * O(m^2) space
*/

function canConstruct2(target, wordBank, memo = {}) {
  if(target in memo) return memo[target]
  if( target === '') return true

  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const newTarget = target.slice(word.length, target.length)
      if(canConstruct(newTarget, wordBank) === true) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct('abcdef' , ['ab', 'abc', 'cd', 'def', 'abcd'] ))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'] ))

console.log(canConstruct2('abcdef' , ['ab', 'abc', 'cd', 'def', 'abcd'] ))
console.log(canConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'] ))