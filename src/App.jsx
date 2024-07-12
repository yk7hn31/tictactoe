import { useState } from 'react';
import './css/App.css';
import Gameboard from './component/Gameboard.jsx';
import Player from './component/Player.jsx';

function App() {
  const searchParam = new URLSearchParams(window.location.search);
  const [log, setLog] = useState([]);
  const activePlayer = log[0] ? log[0].player : 1;

  function handleCellSelect(e) {
    if (!e.target.innerText) {
      const row = parseInt(e.target.dataset.row);
      const column = parseInt(e.target.dataset.column);
      setLog((prevLog) => {
        const newLog = [...prevLog.map(inner => ({...inner}))];
        const player = prevLog[0]?.player === 1 ? 2 : 1;
        newLog.unshift({ row, column, player });
        return newLog;
      });
    }
  }

  return (
    <main>
      <Gameboard rowCol={searchParam.get('rowCol') || 4} log={log} handleClick={handleCellSelect} />
      <ol id='playerlist'>
        <Player id={1} activePlayer={activePlayer} />
        <Player id={2} activePlayer={activePlayer} />
      </ol>
    </main>
  );
}

export default App;