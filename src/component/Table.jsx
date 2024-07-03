import { useState } from 'react';

function Table({ rowCol, handleClick }) { // rowCol must be either 3 or 4
  const [table, setTable] = useState(() => {
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
    <table id='gameboard'>
        <tbody>
            {table.map((row, rowIndex) =>
              <tr key={rowIndex}>
                {row.map((column, columnIndex) => {
                  let cell = null;
                  if (column) cell = column === 1 ? 'O' : 'X';
                  return <td key={columnIndex} data-column={columnIndex} data-row={rowIndex} onClick={(e) => handleClick(e, setTable)}>{cell}</td>
                })}
              </tr>
            )}
        </tbody>
    </table>
  );
}

export default Table;