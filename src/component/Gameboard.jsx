import { useState } from 'react';

function Gameboard({ rowCol, handleClick }) { // rowCol must be either 3 or 4
  const [gameboard, setGameboard] = useState(() => {
    const init = [];
    for (let i = 0; i < rowCol; i++) {
      init.push([]);
      for (let j = 0; j < rowCol; j++) {
        init[i].push(0);
      }
    }
    return init;
  });

  return (
    <div id='gameboard'>
      {gameboard.map((row, rowIndex) =>
        <ol key={`${rowIndex}xx`} className='row'>
          {row.map((column, columnIndex) => {
            let cell = null;
            if (column) cell = column === 1 ? 'O' : 'X';
            return (
              <li key={`${rowIndex}x${columnIndex}`} className='cell' data-column={columnIndex} data-row={rowIndex} onClick={e => handleClick(e, setGameboard)}>
                <span>{cell}</span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

export default Gameboard;