import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="PlayerCard">
      <img src={imageUrl} alt={name} />
      <div className="player-info">
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <p>Nationality: {nationality}</p>
        <p>Jersey Number: {jerseyNumber}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Player;
