
function isOperator(n) {
  return (
    n === '/' ||
    n === 'x' ||
    n === '+' ||
    n === '-' 
  )
}

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  'x': (x, y) => x * y,
  '/': (x, y) => x / y,
}

function stringToCalc(str = '') {
  const result = [];
  let lastIndex = 0;
  for(let i = 0; i < str.length; i++) {
    if (isOperator(str[i])) {
      result.push(Number(str.slice(lastIndex, i)));
      result.push(str[i]);
      lastIndex = i+1;
    }
  }
  result.push(Number(str.slice(lastIndex, str.length)));
  return result;
}

function solve(arr = [0, '+', 0]) {
  if (arr.length <= 3) {
    const result = operations[arr[1]](arr[0], arr[2]);
    return result;
  }

  for (let i = 1; i < arr.length; i+=2) {
    if (arr[i] === 'x' || arr[i] === '/') {
      const result = operations[arr[i]](arr[i-1], arr[i+1]);
      const newArr = [ 
        ...arr.slice(0, i-1), 
        result,
        ...arr.slice(i+2, arr.length) 
      ];
      return solve(newArr);
    }
  }

  const result = operations[arr[1]](arr[0], arr[2]);
  return solve([ result, ...arr.slice(3, arr.length)]);
}
