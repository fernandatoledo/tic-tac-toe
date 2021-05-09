import React, { useState } from "react";
import "./Board.css";

const Board = ({ currentPlayer, onPlacePiece }) => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [boardState, setBoardState] = useState(initialBoard);

  const placeValue = (rowIndex, columnIndex) => {
    let boardStateCopy = [...boardState];
    boardStateCopy[rowIndex][columnIndex] = currentPlayer;
    setBoardState(boardStateCopy);
    onPlacePiece();
  };

  return boardState.map((row, rowIndex) => (
    <div className="row-container">
      {row.map((piece, columnIndex) => (
        <button
          className="field"
          onClick={() => placeValue(rowIndex, columnIndex)}
        >
          {piece}
        </button>
      ))}
    </div>
  ));
};

export default Board;
