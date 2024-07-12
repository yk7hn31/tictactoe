function Table({ gameboard, handleClick }) {
  return (
    <div id='gameboard' className={`length-${gameboard.length}`}>
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

export default Table;