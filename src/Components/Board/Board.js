import React, { useEffect, useState } from "react";
import "./Board.css";

const Board = ({
  currentPlayer,
  onPlacePiece,
  onGameOver,
  finished,
  onGameStart,
}) => {
  // state
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [boardState, setBoardState] = useState(initialBoard);
  const [stepCount, setStepCount] = useState(0);
  const [lastCoordinates, setLastCoordinates] = useState({
    columnIndex: 0,
    rowIndex: 0,
  });

  useEffect(() => {
    let finished = false;
    if (stepCount >= 5) {
      finished = checkResult(
        lastCoordinates.rowIndex,
        lastCoordinates.columnIndex
      );
    }
    !finished && onPlacePiece();
  }, [boardState, stepCount, lastCoordinates]);

  const placeValue = (rowIndex, columnIndex) => {
    let boardStateCopy = [...boardState];
    boardStateCopy[rowIndex][columnIndex] = currentPlayer;
    setBoardState(boardStateCopy);
    setStepCount(stepCount + 1);
    setLastCoordinates({ columnIndex, rowIndex });
  };

  const checkResult = (rowIndex, columnIndex) => {
    if (
      //checkColumn
      (boardState[rowIndex][0] === boardState[rowIndex][1] &&
        boardState[rowIndex][0] === boardState[rowIndex][2]) ||
      //checkRow
      (boardState[0][columnIndex] === boardState[1][columnIndex] &&
        boardState[0][columnIndex] === boardState[2][columnIndex]) ||
      //checkDiagonal
      (columnIndex === rowIndex &&
        boardState[0][0] === boardState[2][2] &&
        boardState[0][0] === boardState[1][1]) ||
      //checkOtherDiagonal
      (columnIndex + rowIndex === 2 &&
        boardState[0][2] === boardState[2][0] &&
        boardState[0][2] === boardState[1][1])
    ) {
      onGameOver(1);
      return true;
    } else if (stepCount == 9) {
      onGameOver(0);
      return true;
    }
  };

  const restart = () => {
    setBoardState(initialBoard);
    setStepCount(0);
    onGameStart();
  };

  return (
    <>
      {boardState.map((row, rowIndex) => (
        <div className="row-container">
          {row.map((piece, columnIndex) => (
            <button
              className="field"
              onClick={() =>
                piece === "" ? placeValue(rowIndex, columnIndex) : null
              }
            >
              {piece}
            </button>
          ))}
        </div>
      ))}
      <button
        className={`footer-button ${!finished && "hidden"}`}
        onClick={restart}
      >
        Play again
      </button>
    </>
  );
};

export default Board;
