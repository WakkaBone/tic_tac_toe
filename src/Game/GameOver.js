import React from "react";
import { Button, MainHeading, ResultContainer } from "../StyledComponents";

const GameOver = ({ gameOver, playAgain }) => {
  const handleClick = () => {
    playAgain();
  };
  return (
    <ResultContainer>
      <MainHeading>
        {gameOver.winner === "draw"
          ? "It is a draw"
          : gameOver.winner === "x"
          ? "Congratulations! You won!"
          : "You lost"}
      </MainHeading>
      <Button onClick={handleClick}>Play again</Button>
    </ResultContainer>
  );
};

export default GameOver;
