import React, { useContext } from "react";
import { GameContext } from "../Context";
import { CellStyle, CellContent } from "../StyledComponents";

const Cell = ({ number, opponentTurn }) => {
  const { allCells, turn, setTurn, setAllCells, setEmptyCells } =
    useContext(GameContext);

  const handleClick = async () => {
    if (allCells[number]) {
      return;
    }
    const newCells = [
      ...allCells.map((item, index) => {
        if (index === number) {
          return turn === "x" ? "x" : "0";
        } else return item;
      }),
    ];
    setAllCells(newCells);
    setTurn(turn === "x" ? "0" : "x");
    await opponentTurn(newCells);
    const empty = [];
    allCells.forEach((item, index) => {
      if (item === "") {
        empty.push(index);
      }
    });
    setEmptyCells(empty);
  };

  return (
    <CellStyle onClick={handleClick}>
      <CellContent>{allCells[number]}</CellContent>
    </CellStyle>
  );
};

export default Cell;
