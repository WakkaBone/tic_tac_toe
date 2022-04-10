import React, { useContext } from "react";
import { GameContext } from "../Context";
import { CellStyle, CellContent } from "../StyledComponents";

const Cell = ({
  number = 0,
  opponentTurn = (f) => f,
  myTurn = (f) => f,
  checkEndGame = (f) => f,
}) => {
  const { allCells, setTurn, setEmptyCells } = useContext(GameContext);

  const handleClick = async () => {
    if (allCells[number]) {
      return;
    }
    const myTurnAftermath = await myTurn(number);
    setTurn("0");
    if (checkEndGame()) {
      return;
    }
    await opponentTurn(myTurnAftermath);
    if (checkEndGame()) {
      return;
    }
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
