import { useState } from 'react';
import './css/App.css';
import Gameboard from './component/Gameboard.jsx';
import PlayerList from './component/PlayerList.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState(0);
  function handleGameboardSelect(e, setGameboard) {
    if (!e.target.innerText) {
      const row = parseInt(e.target.dataset.row);
      const column = parseInt(e.target.dataset.column);
      setGameboard((prevGameboard) => {
        const newGameboard = [...prevGameboard.map((inner) => [...inner])];
        newGameboard[row][column] = activePlayer === 0 ? 1 : -1;
        setActivePlayer(activePlayer === 0 ? 1 : 0);
        return newGameboard;
      });
    }
  }

  return (
    <main>
      <Gameboard rowCol={4} handleClick={handleGameboardSelect} />
      <PlayerList activePlayer={activePlayer} />
    </main>
  );
}

export default App;