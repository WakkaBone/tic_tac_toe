import React from "react";
import { Loader, Subheader } from "../StyledComponents";

const NotReady = () => {
  return (
    <div>
      <Subheader>
        Waiting for another player to connect... <Loader />
      </Subheader>
    </div>
  );
};

export default NotReady;
