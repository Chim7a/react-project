import React from "react";
import Player from "./Player";

function PlayerList(props) {
  return (
    <div>
      {props.playersData.map((item) => {
        return <Player key={item.id} team={item.team} nameProp={item.name} />;
      })}
    </div>
  );
}

export default PlayerList;
