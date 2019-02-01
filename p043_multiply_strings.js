/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const left = translate(num1)
  const right = translate(num2)

  return left.map((x, index) => {
      const result = right.slice(0)
      let carry = 0
      for (let i = result.length - 1; i >= 0; i--) {
        const temp = result[i] * x + carry
        carry = Math.floor(temp / 10)
        result[i] = temp % 10
      }
      if (carry > 0) {
        result.unshift(carry)
      }
      return result
        .concat(Array(left.length - index - 1)
        .fill(0))
    })
    .reduce((arr1, arr2) => {
      // 确保 arr1 比较大
      if (arr1.length < arr2.length) {
        const temp = arr1
        arr1 = arr2
        arr2 = temp
      }
      let carry = 0, i, j;
      for (i = arr1.length - 1, j = arr2.length  -1;j >= 0; i--, j--) {
        const temp = arr1[i] + arr2[j] + carry;
        arr1[i] = temp % 10
        carry = Math.floor(temp / 10)
      }
      for (; i >= 0 && carry > 0; i--) {
        const temp = arr1[i] + carry;
        arr1[i] = temp % 10
        carry = Math.floor(temp / 10)
      }
      if (carry > 0) {
        arr1.unshift(carry)
      }
      return arr1
    }, [])
    .join('')
};

function translate(str) {
  return str.split('')
    .map(c => c.charCodeAt() - '0'.charCodeAt())
}

console.log(multiply('9133', '0'))
console.log(multiply('123', '456'));
console.log(multiply('9', '98'));
