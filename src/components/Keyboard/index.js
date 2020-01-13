import React from 'react';

import { buttons } from '../../utils';

function Keyboard({ handleClick }) {
  return (
    <div>
      <h1>Keyboard</h1>
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
