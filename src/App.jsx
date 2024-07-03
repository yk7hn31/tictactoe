import { useState } from 'react';
import './css/App.css';
import Table from './component/Table.jsx';
import PlayerList from './component/PlayerList.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState(0);
  function handleTableSelect(e, setTable) {
    if (!e.target.innerText) {
      const row = parseInt(e.target.dataset.row);
      const column = parseInt(e.target.dataset.column);
      setTable((prevTable) => {
        const newTable = [...prevTable.map((inner) => [...inner])];
        newTable[row][column] = activePlayer === 0 ? 1 : -1;
        setActivePlayer(activePlayer === 0 ? 1 : 0);
        return newTable;
      });
    }
  }

  return (
    <main>
      <Table rowCol={4} handleClick={handleTableSelect} />
      <PlayerList activePlayer={activePlayer} />
    </main>
  );
}

export default App;