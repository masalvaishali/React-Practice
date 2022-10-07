import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./UseContextCompA";

function UseContextCompB() {
  const user = useContext(UserContext);
  const learn = useContext(ChannelContext);
  return (
    <div>
      <h2>
        {user} - {learn}
      </h2>
    </div>
  );
}

export default UseContextCompB;
