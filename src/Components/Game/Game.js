import React, { useState } from "react";
import { Board } from "..";
import "./Game.css";

const PLAYERS = {
  PLAYER1: "X",
  PLAYER2: "O",
};

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.PLAYER1);

  const changePlayer = () => {
    setCurrentPlayer(
      currentPlayer === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1
    );
  };

  return (
    <>
      <text class="current-player">It's {currentPlayer}'s turn</text>
      <Board currentPlayer={currentPlayer} onPlacePiece={changePlayer} />
    </>
  );
};

export default Game;
