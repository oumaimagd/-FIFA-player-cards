import React from "react";
import Player from "./Player";

function PlayersList(props) {
  const { players } = props;

  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
}

export default PlayersList;
