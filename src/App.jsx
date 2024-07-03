import { useState } from 'react';
import './css/App.css';
import Gameboard from './component/Gameboard.jsx';
import Player from './component/Player.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState(1); // player = 1 or 2
  const [log, setLog] = useState([]);

  function handleCellSelect(e) {
    if (!e.target.innerText) {
      const row = parseInt(e.target.dataset.row);
      const column = parseInt(e.target.dataset.column);
      setLog((prevLog) => {
        const newLog = [...prevLog.map(inner => ({...inner}))];
        let player = prevLog[0] ? (prevLog[0].player === 1 ? 2 : 1) : 1;
        newLog.unshift({ row, column, player });
        return newLog;
      });
      setActivePlayer((prevAcPy) => prevAcPy === 1 ? 2 : 1);
    }
  }

  return (
    <main>
      <Gameboard rowCol={4} log={log} handleClick={handleCellSelect} />
      <ol id='playerlist'>
        <Player id={1} activePlayer={activePlayer} />
        <Player id={2} activePlayer={activePlayer} />
      </ol>
    </main>
  );
}

export default App;