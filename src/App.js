import React, { useState, useEffect } from "react";
import Lobby from "./Lobby/Main";
import Game from "./Game/Main";
import { ModeContext } from "./Context";
import { MainContainer, ContentWrapper } from "./StyledComponents";

const checkAnotherPlayer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "Player connected" });
    }, 2000);
  });
};

const App = () => {
  const [readyToStart, setReadyToStart] = useState(false);
  const [gameIsOn, setGameIsOn] = useState(false);

  const start = async () => {
    const playerJoined = await checkAnotherPlayer();
    if (playerJoined && playerJoined.message === "Player connected") {
      setReadyToStart(true);
    }
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <MainContainer>
      <ContentWrapper>
        <ModeContext.Provider value={{ setGameIsOn }}>
          {gameIsOn ? <Game /> : <Lobby readyToStart={readyToStart} />}
        </ModeContext.Provider>
      </ContentWrapper>
    </MainContainer>
  );
};

export default App;
