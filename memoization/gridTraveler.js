/** 
 * 1 gridTraveler มีกำหนดขนาดเส้นทาง กว้าง m , ยาว n 
 * การเกิดทางโดยเริ่มจาก บนซ้าย ไปถึงเป้าหมาย อยู่ที่ ล่างขวา 
 * และ การเดินจะมีได้ 2 ทาง ขวา, ล่าง
 * 2 คำนวณว่าจะเดินกี่ก้าวถึงเป้าหมายได้กี่เส้นทาง
 * O(2^n+m) time
 * O(n+m) space
 */
function gridTraveler(m,n) {
  if(m === 0 || n === 0) {
    return 0
  }else if(m === 1 && n === 1) {
    return 1
  }else {
    return gridTraveler(m-1, n) + gridTraveler(m, n-1)
  }
}

function gridTraveler2(m,n, memo={}) {
  const key = `${m},${n}`
  if(key in memo) return memo[key]
  if(m === 0 || n === 0) {
    return 0
  }else if(m === 1 && n === 1) {
    return 1
  }else {
    memo[key] = gridTraveler2(m-1, n, memo) + gridTraveler2(m, n-1, memo)
    return memo[key]
  }
}

const m = 3
const n = 3
const result = gridTraveler(m , n)
const result2 = gridTraveler2(m , n)


console.log(`result size ${m} ${n} = ${result}`)
console.log(`result size ${m} ${n} = ${result2}`)
