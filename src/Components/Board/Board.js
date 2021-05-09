import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [boardState, setBoardState] = useState(initialBoard);

  const placeValue = (rowIndex, columnIndex) => {
    let boardStateCopy = [...boardState];
    boardStateCopy[rowIndex][columnIndex] = "X";
    setBoardState(boardStateCopy);
  };

  return boardState.map((row, rowIndex) => (
    <div className="row-container">
      {row.map((piece, columnIndex) => (
        <div className="field">
          <button
            className="field"
            onClick={() => placeValue(rowIndex, columnIndex)}
          >
            {piece}
          </button>
        </div>
      ))}
    </div>
  ));
};

export default Board;
