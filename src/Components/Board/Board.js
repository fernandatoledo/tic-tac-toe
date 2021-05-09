import React from "react";
import "./Board.css";

const Board = () => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  return initialBoard.map((row) => (
    <div className="row-container">
      {row.map(() => (
        <div className="field" />
      ))}
    </div>
  ));
};

export default Board;
