export function parseString(str) {}

export function isNumber(n) {
  return (
    n === '1' ||
    n === '2' ||
    n === '3' ||
    n === '4' ||
    n === '5' ||
    n === '6' ||
    n === '7' ||
    n === '8' ||
    n === '9' ||
    n === '0'
  );
}

export function isOperator(n) {
  return n === '/' || n === '+' || n === 'x' || n === '-';
}

export const operations = {
  '+': (prev, next) => prev + next,
  '-': (prev, next) => prev - next,
  '*': (prev, next) => prev * next,
  '/': (prev, next) => prev / next,
};

export const buttons = [
  {
    innerHTML: 'AC',
    id: 'clear',
    class: 'delete',
  },
  {
    innerHTML: '/',
    id: 'divide',
    class: 'operand',
  },
  {
    innerHTML: 'x',
    id: 'multiply',
    class: 'operand',
  },
  {
    innerHTML: '7',
    id: 'seven',
    class: 'number',
  },
  {
    innerHTML: '8',
    id: 'eight',
    class: 'number',
  },
  {
    innerHTML: '9',
    id: 'nine',
    class: 'number',
  },
  {
    innerHTML: '-',
    id: 'subtract',
    class: 'operand',
  },
  {
    innerHTML: '4',
    id: 'four',
    class: 'number',
  },
  {
    innerHTML: '5',
    id: 'five',
    class: 'number',
  },
  {
    innerHTML: '6',
    id: 'six',
    class: 'number',
  },
  {
    innerHTML: '+',
    id: 'add',
    class: 'operand',
  },
  {
    innerHTML: '1',
    id: 'one',
    class: 'number',
  },
  {
    innerHTML: '2',
    id: 'two',
    class: 'number',
  },
  {
    innerHTML: '3',
    id: 'three',
    class: 'number',
  },
  {
    innerHTML: '=',
    id: 'equals',
    class: 'equals',
  },
  {
    innerHTML: '0',
    id: 'zero',
    class: 'number',
  },
  {
    innerHTML: '.',
    id: 'decimal',
    class: 'number',
  },
];
