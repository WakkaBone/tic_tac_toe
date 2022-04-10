import React, { useContext } from "react";
import { ModeContext } from "../Context";
import { Button } from "../StyledComponents";

const Ready = () => {
  const modeContext = useContext(ModeContext);

  const handleClick = () => {
    modeContext.setGameIsOn(true);
  };

  return (
    <div>
      <Button onClick={handleClick}>Start!</Button>
    </div>
  );
};

export default Ready;
