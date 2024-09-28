import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Players from "./components/Players/Players";
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver/GameOver";

function App() {
	const PLAYERS = {
		"X" : "Player 1",
		"O" : "Player 2",
	};
	
	const INITIAL_GAME_BOARD = [
		[null,null,null],
		[null,null,null],
		[null,null,null]
	];
	const [gameTurns, setGameTurns] = useState([]);
	const [playerName, setPlayerName] = useState(PLAYERS);
	let gameBoard = INITIAL_GAME_BOARD;

	gameBoard = deriveGameBoard(gameBoard);
	const winning = deriveWinner(gameBoard);
	const hasDraw = (!winning && gameTurns.length === 9);
	
	function deriveGameBoard(gameBoard){
		for(const turn of gameTurns) {
			const { square, player } = turn;
			const { row, col } = square;
			gameBoard[row][col] = player;
		}
		return gameBoard;
	}

	function deriveWinner(gameBoard) {
		let winning = null;
		for(const combination of WINNING_COMBINATIONS) {
			const firstWinningCombination = gameBoard[combination[0].row][combination[0].column];
			const SecondWinningCombination = gameBoard[combination[1].row][combination[1].column];
			const ThirdWinningCombination = gameBoard[combination[2].row][combination[2].column];
	
			if(firstWinningCombination &&
				firstWinningCombination === SecondWinningCombination && 
				firstWinningCombination === ThirdWinningCombination){
					winning = playerName[firstWinningCombination];
				}
		}
		return winning;
	}
	
	function deriveActivePlayer(gameTurns) {
		let currentPlayer = "X";
		if(gameTurns.length > 0 && gameTurns[0].player === "X") {
			currentPlayer = "O";
		}
		return currentPlayer;
	}
	
	let activePlayer = deriveActivePlayer(gameTurns);
	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns(prevTurns => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			const updatedTurn = [
				{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
				...prevTurns
			];
			return updatedTurn;
		});
	}

	function handleRematch() {
		setGameTurns([]);
	}

	function handleSetPlayerName(symbol, name) {
		setPlayerName(prevPlayerName => {
			return {
				...prevPlayerName,
				[symbol]: name
			}
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Players 
						initialName={PLAYERS.X}
						symbol="X" 
						activePlayer={activePlayer === "X"}
						onPlayerNameChange={handleSetPlayerName}
						></Players>
					<Players 
						initialName={PLAYERS.O}
						symbol="O" 
						activePlayer={activePlayer === "O"} 
						onPlayerNameChange={handleSetPlayerName}
						></Players>
				</ol>
				GAME BOARD
				{(winning || hasDraw) && <GameOver winner={winning}  onRematch={handleRematch}/>}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
			</div>
		</main>
	);
  
}

export default App
