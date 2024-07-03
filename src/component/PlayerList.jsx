import Player from './Player.jsx';

function PlayerList({ activePlayer }) {
  return (
    <ol id='playerlist'>
      <Player id={0} activePlayer={activePlayer} />
      <Player id={1} activePlayer={activePlayer} />
    </ol>
  );
}

export default PlayerList;