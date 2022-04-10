import React from "react";
import { Button, MainHeading, ResultContainer } from "../StyledComponents";
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";

const GameOver = ({ gameOver, playAgain }) => {
  const handleClick = () => {
    playAgain();
  };
  return (
    <ResultContainer>
      <MainHeading>
        {gameOver.winner === "draw" ? (
          <span>
            It's a draw <FaRegHandshake />
          </span>
        ) : gameOver.winner === "x" ? (
          <span>
            You won! <RiEmotionHappyLine />
          </span>
        ) : (
          <span>
            You lost <RiEmotionUnhappyLine />
          </span>
        )}
      </MainHeading>
      <Button onClick={handleClick}>Play again</Button>
    </ResultContainer>
  );
};

export default GameOver;
