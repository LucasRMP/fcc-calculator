import React from 'react';

import { buttons } from '../../utils/app';

import './styles.css';

function Keyboard({ handleClick }) {
  return (
    <div id='keyboard-container'>
      {buttons.map(btn => (
        <button
          key={btn.id}
          id={btn.id}
          className={btn.class}
          onClick={() => handleClick(btn.innerHTML)}
        >
          {btn.innerHTML}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
