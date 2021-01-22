/* 
  * howSum(targetSum, [numbers])
  * เป็นการบวกค่าใน numbers บวกไปเรื่อย จนได้ค่าเท่ากับ targetSum
  * sum 7 array 5,3,4,7 = 4,3 โดย 4+3 = 7
  * sum 7 array 2,4 = null ไม่มีค่าใดบวกเท่ากับ 7
  * sum 8 array 2,3,5 = 2,2,2,2 โดย 2+2+2+2 = 8
  * number targetSum ค่าบวกเท่านั้น
  * targetSum = m , number.length = n 
  * O(n^m * m) time
  * O(m) space
*/

function howSum (targetSum, numbers) {
  if(targetSum === 0) return []
  if(targetSum < 0) return null


  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers)
    if(remainderResult !== null) {
      return [...remainderResult, num]
    }
  }
  return null
}

function howSum2 (targetSum, numbers, memo={}) {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return []
  if(targetSum < 0) return null


  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if(remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

const number = [5,3,4,7]
const sum = 7

const result = howSum(sum, number)
console.log(`sum ${sum} array ${number} = ${result}`)

const number2 = [2,4]
const result2 = howSum(sum, number2)
console.log(`sum ${sum} array ${number2} = ${result2}`)

const result3 = howSum2(sum, number)
console.log(`sum ${sum} array ${number} = ${result3}`)

const result4 = howSum2(sum, number2)
console.log(`sum ${sum} array ${number2} = ${result4}`)

console.log(howSum(8, [2,3,5]))
