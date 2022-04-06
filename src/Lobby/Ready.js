import React, { useContext } from "react";
import { ModeContext } from "../Context";
import { Button } from "../StyledComponents";

const Ready = () => {
  const modeContext = useContext(ModeContext);

  const handleClick = () => {
    modeContext.setGameIsOn(true);
  };

  return <Button onClick={handleClick}>Start!</Button>;
};

export default Ready;
