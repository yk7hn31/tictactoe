import Table from './Table.jsx';
import Modal from './Modal.jsx';

function winCheck(gameboard) {
  const rowCol = gameboard.length;

  for (let i = 0; i < rowCol; i++) { // row check
    const init = gameboard[i][0];
    if (init && gameboard[i].every(cell => cell === init)) return init;
  }

  for (let j = 0; j < rowCol; j++) { // column check
    const init = gameboard[0][j];
    if (init) {
      let won = true;
      for (let k = 0; k < rowCol; k++) {
        if (gameboard[k][j] !== init) {
          won = false;
          break;
        }
      }
      if (won) return init;
    }
  }

  const diagInit = gameboard[0][0]; // diagonal check
  if (diagInit) {
    let won = true;
    for (let l = 1; l < rowCol; l++) {
      if (gameboard[l][l] !== diagInit) {
        won = false;
        break;
      }
    }
    if (won) return diagInit;
  }

  const antiDiagInit = gameboard[0][rowCol - 1];
  if (antiDiagInit) {
    let won = true;
    for (let m = 1; m < rowCol; m++) {
      if (gameboard[m][rowCol - m - 1] !== antiDiagInit) {
        won = false;
        break;
      }
    }
    if (won) return antiDiagInit;
  }

  return false;
}

function deriveGameboard(rowCol, log) {
  const gameboard = [];

  for (let i = 0; i < rowCol; i++) {
    gameboard.push([]);
    for (let j = 0; j < rowCol; j++) {
      gameboard[i].push(null);
    }
  }

  for (const act of log) {
    gameboard[act.row][act.column] = act.player;
  }

  return gameboard;
}

function Gameboard({ rowCol, log, handleCellClick, handleRematch }) { // rowCol must be either 3 or 4
  const gameboard = deriveGameboard(rowCol, log);
  const won = winCheck(gameboard);

  return (
    <div id='gameboard' className={`length-${gameboard.length}`}>
      {won ? <Modal onRematch={handleRematch}>Player {won} won!</Modal> : <Table gameboard={gameboard} handleClick={handleCellClick} />}
    </div>
  );
}

export default Gameboard;