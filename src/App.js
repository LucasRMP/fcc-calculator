import React, { useState } from 'react';

import Display from './components/Display';
import Keyboard from './components/Keyboard';

function App() {
  const [input, setInput] = useState('');
  const [totalInput, setTotalInput] = useState('');

  const handleClick = value => {
    console.log(value);
    setInput(input + value);
  };

  return (
    <div className='App'>
      <div className={['calculator', 'container'].join(' ')}>
        <Display buffer={input} total={totalInput} />
        <Keyboard handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
