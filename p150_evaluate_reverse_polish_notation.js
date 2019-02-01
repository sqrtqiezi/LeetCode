/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const regex = /^[*+-\/]$/;
  tokens.forEach(function (token) {
    if (!regex.test(token)) {
      stack.push(+token);
    } else {
      const y = stack.pop();
      const x = stack.pop();
      stack.push(getMethod(token)(x, y));
    }
  });
  return stack[0];
}

function getMethod(op) {
  switch(op) {
    case '+':
      return (x, y) => x + y;
    case '-':
      return (x, y) => x - y;
    case '*':
      return (x, y) => x * y;
    case '/':
      return (x, y) => {
        const result = x / y
        return result > 0 ? Math.floor(result) : Math.ceil(result)
      }
    default:
      throw new Error('operator not support:' + op);
  }
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
