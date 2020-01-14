import React, { useState, useEffect } from 'react';

import Display from './components/Display';
import Keyboard from './components/Keyboard';

import { isOperator, solve, stringToCalc } from './utils/calculator';

import './styles.css';

function App() {
  const [input, setInput] = useState('0');
  const [totalInput, setTotalInput] = useState('0');
  const [ lastChar, setLastChar ] = useState('0');

  useEffect(() => {
    setLastChar(input[input.length-1]);
  }, [input]);

  const showLimitReachedMessage = () => { 
    const bInput = input;
    setInput('SIZE LIMIT REACHED!');
    setTimeout(() => {
      setInput(bInput);
    }, 2000);
  }

  const handleClick = value => {
    if (value === 'AC') {
      setInput('0');
      setTotalInput('0');
    } else if (isOperator(value)) {
      if (isOperator(lastChar)) {
        setInput(input.slice(0, input.length-1) + value);
        setTotalInput(totalInput.slice(0, totalInput.length-1) + value);
      } else {
        setInput(input + value);
        setTotalInput(totalInput + value);
      }
    } else if(value === '=') {
      if (lastChar === '.' || isOperator(lastChar)) {
        setInput(input.slice(0, input.length-1) + value);
        setTotalInput(totalInput.slice(0, totalInput.length-1) + value);
      }
      const response = solve(stringToCalc(totalInput));
      console.log('response', response);
      setInput(response);
      setTotalInput(response);
    } else if (value === '.') {
      if (input.includes('.')) return;
      setInput(input + value);
      setTotalInput(totalInput + value);
    } else {
      if (input.length > 20) {
        showLimitReachedMessage();
      }
      else {
        if (input === '0') {
          setInput(value);
          setTotalInput(totalInput.slice(0, totalInput.length-1) + value);
        } else if(isOperator(lastChar)) {
          setInput(value);
          setTotalInput(totalInput + value);
        } else {
          setInput(input + value);
          setTotalInput(totalInput + value);
        }
      }
    }
  };

  return (
    <div className='App'>
      <div id='calculator-container'>
        <Display buffer={input} total={totalInput} />
        <Keyboard handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
