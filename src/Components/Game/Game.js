import React, { useState } from "react";
import { Board } from "..";
import "./Game.css";

const PLAYER = {
  PLAYER1: "X",
  PLAYER2: "O",
};

const GAME_RESULT = {
  WIN: 1,
  TIE: 0,
};

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.PLAYER1);
  const [score, setScore] = useState({
    [PLAYER.PLAYER1]: 0,
    [PLAYER.PLAYER2]: 0,
    ties: 0,
  });
  const [finished, setFinished] = useState(false);

  const changePlayer = () => {
    setCurrentPlayer(
      currentPlayer === PLAYER.PLAYER1 ? PLAYER.PLAYER2 : PLAYER.PLAYER1
    );
  };

  const updateScore = (result) => {
    if (result === GAME_RESULT.WIN) {
      setScore({ ...score, [currentPlayer]: score[currentPlayer] + 1 });
    } else {
      setScore({ ...score, ties: score.ties + 1 });
    }
    setFinished(true);
  };

  const startGame = () => {
    setFinished(false);
    changePlayer();
  };

  return (
    <>
      <text class="current-player">It's {currentPlayer}'s turn</text>
      <Board
        currentPlayer={currentPlayer}
        onPlacePiece={changePlayer}
        onGameOver={updateScore}
        finished={finished}
        onGameStart={startGame}
      />

      <div className="score-board">
        <div className="score-cell">
          <p>Player {PLAYER.PLAYER1}:</p>
          <text> {score[PLAYER.PLAYER1]}</text>
        </div>
        <div className="score-cell">
          <p>Player {PLAYER.PLAYER2}:</p>
          <text> {score[PLAYER.PLAYER2]}</text>
        </div>
        <div className="score-cell">
          <p>Ties:</p>
          <text> {score.ties}</text>
        </div>
      </div>
    </>
  );
};

export default Game;
