import React from 'react';

function Display({ total, buffer }) {
  return (
    <div id='display'>
      <p>{total}</p>
      <p>{buffer}</p>
    </div>
  );
}

export default Display;
