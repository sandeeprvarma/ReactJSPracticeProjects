import {React} from 'react'

function GameBoard({ onSelectSquare, board }) {
  
  // Manage as little state as possible and try to derive values from state
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleGmaeBoardClick(rIndex,cIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     let updatedGameBoard = [...prevGameBoard];
  //     updatedGameBoard[rIndex][cIndex] = activePlayer;
  //     return updatedGameBoard;
  //   });
  //   activePlayerSwitch();
  // };

  return (
    <ol id="game-board">
      {board.map( (row,rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((col,cIndex) => (
              <li key={cIndex}>
                <button onClick={() => onSelectSquare(rIndex,cIndex) } disabled={col !== null}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard