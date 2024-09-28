import {useState, React} from 'react'

const Players = ({initialName, symbol, activePlayer, onPlayerNameChange}) => {
  const [name, setName] = useState(initialName);
  const [isEditMode, setEditMode] = useState(false)
  function handleClick() {
    setEditMode(e => !e);
    if(isEditMode) {
      onPlayerNameChange(symbol, name);
    }
  }

  function handleChange(e) {
    setName(e.target.value.toUpperCase());
  }

  let playerName = <span className="player-name">{name}</span>;
  if(isEditMode)
    playerName = <input type="text" value={name} onChange={handleChange} required/>;
  return (
    <>
      <li className={activePlayer ? 'active' : ''}>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditMode ? "Save" : "Edit"}</button>
      </li>
    </>
  )
}

export default Players