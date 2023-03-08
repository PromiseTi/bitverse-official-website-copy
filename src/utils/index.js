// 生成8位随机数
export function randomFour() {
  let charactors = '1234567890'
  let value = ''
  let i
  for (let j = 1; j <= 8; j++) {
    i = parseInt(10 * Math.random())
    value = value + charactors.charAt(i)
  }
  return value
}
