import React, { useContext } from "react";
import Table from "./Table";
import { GameContext } from "../Context";
import { GameContainer, Subheader } from "../StyledComponents";

const GameOn = () => {
  const { turn } = useContext(GameContext);
  return (
    <GameContainer>
      <Subheader>
        {turn === "x" ? "Its your turn" : "Wait for your turn"}
      </Subheader>
      <Table />
    </GameContainer>
  );
};

export default GameOn;
