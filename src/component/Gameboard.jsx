function Gameboard({ rowCol, log, handleClick }) { // rowCol must be either 3 or 4
  let gameboard = [];
  for (let i = 0; i < rowCol; i++) {
    gameboard.push([]);
    for (let j = 0; j < rowCol; j++) {
      gameboard[i].push(null);
    }
  }
  for (const act of log) {
    gameboard[act.row][act.column] = act.player;
  }

  return (
    <div id='gameboard'>
      {gameboard.map((row, rowIndex) =>
        <ol key={`${rowIndex}xx`} className='row'>
          {row.map((column, columnIndex) => {
            let cell = null;
            if (column) cell = column === 1 ? 'O' : 'X';
            return (
              <li key={`${rowIndex}x${columnIndex}`} className='cell' data-column={columnIndex} data-row={rowIndex} onClick={handleClick}>
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