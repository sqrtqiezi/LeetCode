/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  let i = 0, j;
  const arr = [];
  while (i < input.length) {
    for (j = i + 1;
      j < input.length && (input[j].charCodeAt() < 58 && input[j].charCodeAt() > 47);
      j++){}
    arr.push(Number(input.substring(i, j)))
    if (j < input.length) {
      arr.push(input[j]);
    }
    i = j + 1;
  }
  return divide(arr);
};

var divide = function (arr) {
  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 3) {
    return [compute(arr)];
  }
  const result = [];
  for (let i = 1; i < arr.length; i+=2) {
    const left = divide(arr.slice(0, i));
    const right = divide(arr.slice(i + 1));
    const op = arr[i];
    left.forEach(x => {
      right.forEach(y => {
        result.push(compute([x, op, y]));
      })
    })
  }
  return result;
}

var compute = function (arr) {
  const op = arr[1];
  switch(op) {
    case '+':
      return arr[0] + arr[2];
    case '-':
      return arr[0] - arr[2];
    case '*':
      return arr[0] * arr[2];
    default:
      throw new Error('do not support this operator:' + op);
  }
}

console.log(diffWaysToCompute("10+5"));
