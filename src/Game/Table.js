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
        setGameOver({ mode: true, winner: turn === "x" ? "x" : "0" });
        return true;
      }
      if (allCells.filter((item) => item).length === allCells.length) {
        setGameOver({ mode: true, winner: "draw" });
        return true;
      }
    });
  };

  useEffect(() => {
    checkEndGame();
  }, [allCells]);

  const myTurn = (number) => {
    return new Promise((resolve) => {
      const newCells = [
        ...allCells.map((item, index) => {
          if (index === number) {
            return turn === "x" ? "x" : "0";
          } else return item;
        }),
      ];
      setAllCells(newCells);
      resolve(newCells);
    });
  };

  const opponentTurn = (cells) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const temp = [...cells];
        let emptyCellsIndices = [];
        temp.forEach((item, index) => {
          if (!item) {
            emptyCellsIndices.push(index);
          }
        });
        console.log(emptyCellsIndices);
        let randomNumber = Math.ceil(
          Math.random() * emptyCellsIndices.length - 1
        );
        console.log(allCells[emptyCellsIndices[randomNumber]]);
        temp[emptyCellsIndices[randomNumber]] = "0";
        const promise = () =>
          new Promise((resolve, reject) => {
            setAllCells(temp);
            resolve();
          });
        await promise();
        if (checkEndGame()) {
          return;
        }
        setTurn("x");
        resolve();
        return;
      }, 500);
    });
  };

  return (
    <FieldContainer>
      {allCells.map((item, index) => {
        return (
          <Cell
            key={index}
            number={index}
            opponentTurn={opponentTurn}
            myTurn={myTurn}
            checkEndGame={checkEndGame}
          />
        );
      })}
    </FieldContainer>
  );
};

export default Table;
