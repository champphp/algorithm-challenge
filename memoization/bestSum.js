/**
 * bestSum(targetSum, [number])
 * หาค่าผลรวมใน array ที่มีค่าเท่ากับ targetSum ที่ผลรวมสั้นที่สุด
 * bestSum(8, [2,3,5]) = [3,5]
 * [2,2,2,2]
 * [2,3,3]
 * [3,5] ยาวน้อยที่สุด
  * bestSum(7, [5,3,4,7]) = [7]
  * [3,4]
  * [7] ยาวน้อยที่สุด
  * m = target sum
  * n = length array
 * time O( n^ m * m )
 * space O(m*2)
 */


function bestSum(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestSum = null
  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = bestSum(remainder, numbers)
    if(remainderResult !== null) {
      const data = [...remainderResult, num]
      if(shortestSum === null ||shortestSum.length > data.length ) {
        shortestSum = data
      }
    }
  }
  
  return shortestSum
}

/**
 * O(n*m^2) time
 * O(m^2) space
 */
function bestSum2(targetSum, numbers, memo={}) {
  if(targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestSum = null
  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = bestSum(remainder, numbers, memo)
    if(remainderResult  !== null) {
      const data = [...remainderResult , num]
      if(shortestSum === null ||shortestSum.length > data.length ) {
        shortestSum = data
      }
    }
  }
  memo[targetSum] = shortestSum
  return shortestSum
}

const number = [2, 3, 5]
const sum = 8
const result = bestSum2(sum, number)
console.log(`sum ${sum} array ${number} = ${result}`)

console.log(`bestSum(7, [5,3,4,7]) ${bestSum2(7, [5,3,4,7])}`)
