import React from 'react';

import './styles.css';

function Display({ total, buffer }) {
  return (
    <>
      <p id='display'>{total}</p>
      <p id='second'>{buffer}</p>
    </>
  );
}

export default Display;
