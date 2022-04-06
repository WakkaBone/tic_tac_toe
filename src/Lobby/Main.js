import React from "react";
import Ready from "./Ready";
import NotReady from "./NotReady";
import { GameStartContainer, MainHeading } from "../StyledComponents";

const Main = ({ readyToStart = false }) => {
  return (
    <GameStartContainer>
      <MainHeading>Tic Tac Toe</MainHeading>
      {readyToStart ? <Ready /> : <NotReady />}
    </GameStartContainer>
  );
};

export default Main;
