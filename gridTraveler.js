/** 
 * 1 gridTraveler มีกำหนดขนาดเส้นทาง กว้าง m , ยาว n 
 * การเกิดทางโดยเริ่มจาก บนซ้าย ไปถึงเป้าหมาย อยู่ที่ ล่างขวา 
 * และ การเดินจะมีได้ 2 ทาง ขวา, ล่าง
 * 2 คำนวณว่าจะเดินกี่ก้าวถึงเป้าหมาย
 * O(2^n+m) time
 * O(n+m) space
 */
let countgridTraveler = 0
let countgridTraveler2 = 0
function gridTraveler(m,n) {
  countgridTraveler++
  if(m === 0 || n === 0) {
    return 0
  }else if(m === 1 && n === 1) {
    return 1
  }else {
    return gridTraveler(m-1, n) + gridTraveler(m, n-1)
  }
}

function gridTraveler2(m,n, memo={}) {
  countgridTraveler2++
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

const m = 10
const n = 10
const result = gridTraveler(m , n)
const result2 = gridTraveler2(m , n)


console.log(`result size ${m} ${n} = ${result}, time ${countgridTraveler}`)
console.log(`result size ${m} ${n} = ${result2}, time ${countgridTraveler2}`)
