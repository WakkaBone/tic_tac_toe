import React, { useEffect, useContext } from "react";
import { GameContext } from "../Context";
import Cell from "./Cell";
import { FieldContainer } from "../StyledComponents";

const Table = () => {
  const { allCells, setAllCells, setGameOver, turn, setTurn } =
    useContext(GameContext);

  const checkEndGame = () => {
    const allVictoryCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    allVictoryCombinations.forEach((combo) => {
      if (!allCells[combo[0]] || !allCells[combo[1]] || !allCells[combo[2]]) {
        return false;
      }
      if (
        allCells[combo[0]] === allCells[combo[1]] &&
        allCells[combo[1]] === allCells[combo[2]]
      ) {
        setGameOver({ mode: true, winner: turn === "x" ? "0" : "x" });
      }
      if (allCells.filter((item) => item).length === allCells.length) {
        setGameOver({ mode: true, winner: "draw" });
      }
    });
  };

  useEffect(() => {
    checkEndGame();
  }, [allCells]);

  const opponentTurn = (cells) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const temp = [...cells];
        for (let i = 0; i < temp.length; i++) {
          if (!temp[i]) {
            temp[i] = "0";
            setAllCells(temp);
            setTurn("x");
            resolve();
            return;
          }
        }
      }, 500);
    });
  };

  return (
    <FieldContainer>
      {allCells.map((item, index) => {
        return <Cell key={index} number={index} opponentTurn={opponentTurn} />;
      })}
    </FieldContainer>
  );
};

export default Table;
