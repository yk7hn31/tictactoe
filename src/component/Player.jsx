import { useState } from 'react';

function Player({ activePlayer, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(`Player ${id+1}`);
  let playerItem;

  if (isEditing) {
    playerItem = (
      <form className='player-edit' onSubmit={handleSubmit}>
        <input type='text' value={playerName} onChange={handleEdit} autoFocus={true} />
        <button type='submit'>Save</button>
      </form>
    );
  } else {
    playerItem = (
      <li id={id} className={`player ${activePlayer === id ? 'active' : null}`} onClick={handleEdit}>
        <span>{playerName}</span>
      </li>
    );
  }

  function handleEdit(e) {
    isEditing ? setPlayerName(e.target.value) : setIsEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return playerItem;
}

export default Player;