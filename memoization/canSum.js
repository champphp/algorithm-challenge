/* 
  * canSum(targetSum, [number])
  * number targetSum ค่าบวกเท่านั้น
  * หาค่าผลรวมใน array ที่มีค่าเท่ากับ targetSum ถ้ามีจะเป็น true ไม่มี false
  * canSun(7, [5,3,4,7]) = true เพราะค่าใน array มี 3,4 บวกกันเท่ากับ 7 
  * canSun(7, [5,4]) = false เพราะ ค่าใน array รวมกันไม่เท่ากับ 7 เลย
  * targetSum = m , number.length = n 
  * O(n^m) time
  * O(m) space
*/

function canSum(targetSum, numbers) {
  if(targetSum === 0) return true
  if(targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if(canSum(remainder, numbers) === true) {
      return true
    }
  }

  return false
}

function canSum2(targetSum, numbers, memo={}) {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return true
  if(targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if(canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }
  memo[targetSum] = false
  return false
}

const number = [5,3,4,7]
const number2 = [5,3]
const sum = 7

const result = canSum(sum, number)
const result2 = canSum(sum, number2)

const result3 = canSum2(sum, number)
const result4 = canSum2(sum, number2)

console.log(`sum ${sum} array ${number} = ${result}`)
console.log(`sum ${sum} array ${number2} = ${result2}`)

console.log(`sum ${sum} array ${number} = ${result3} `)
console.log(`sum ${sum} array ${number2} = ${result4}`)