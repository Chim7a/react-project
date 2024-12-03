import React from "react";
import Player from "./Player";

function PlayerList(props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3 p-2">
      {props.playersData.map((item) => {
        return (
          <Player
            key={item.id}
            image={item.imageUrl}
            team={item.team}
            nameProp={item.name}
            nationality={item.nationality}
            age={item.age}
            jerseyNumber={item.jerseyNumber}
          />
        );
      })}
    </div>
  );
}

export default PlayerList;
