import React, { useState } from "react";
import GameOn from "./GameOn";
import GameOver from "./GameOver";
import { GameContext } from "../Context";

const initialStateCells = ["", "", "", "", "", "", "", "", ""];

const Main = () => {
  const [gameOver, setGameOver] = useState({ made: false, winner: "" });
  const [turn, setTurn] = useState("x");
  const [allCells, setAllCells] = useState(initialStateCells);
  const [emptyCells, setEmptyCells] = useState([]);

  const playAgain = () => {
    setGameOver({ mode: false });
    setTurn("x");
    setAllCells(initialStateCells);
  };

  return (
    <GameContext.Provider
      value={{
        turn,
        setTurn,
        allCells,
        setAllCells,
        setGameOver,
        emptyCells,
        setEmptyCells,
      }}
    >
      {gameOver.mode ? (
        <GameOver gameOver={gameOver} playAgain={playAgain} />
      ) : (
        <GameOn />
      )}
    </GameContext.Provider>
  );
};

export default Main;
