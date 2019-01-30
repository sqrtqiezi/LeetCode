/**
 * @param {string} input
 * @return {number[]}
 */
let cached
var diffWaysToCompute = function(input) {
  cached = Object.create(null);
  return divide(input, 0, input.length);
};

const regex = /[*+-]/
var isOperator = function (c) {
  return regex.test(c);
}

var divide = function (expr, begin, end) {
  const key = `${begin}-${end}`;
  if (cached[key]) return cached[key];

  const ans = [];
  for(let i = begin+1; i < end; i++) {
    if (isOperator(expr[i])) {
      const l_ans = divide(expr, begin, i);
      const r_ans = divide(expr, i+1, end);

      l_ans.forEach(x => {
        r_ans.forEach(y => {
          ans.push(getMethod(expr[i])(x,y));
        })
      })
    }
  }

  if (ans.length > 0) {
    cached[key] = ans;
  } else {
    cached[key] = [Number(expr.slice(begin, end))];
  }
  return cached[key];
}

var getMethod = function (op) {
  switch(op) {
    case '+':
      return (x,y) => x + y;
    case '-':
      return (x,y) => x - y;
    case '*':
      return (x,y) => x * y;
    default:
      throw new Error('do not support this operator:' + op);
  }
}


console.log(diffWaysToCompute("10+5"));
console.log(cached);
console.log(diffWaysToCompute("2*3-4*5"));
console.log(cached);
