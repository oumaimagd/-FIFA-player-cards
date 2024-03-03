import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import App from "../App";

function Player(props) {
  const { player } = props;

  return (
    <div className="PlayerCard">
      <Card>
        <CardMedia
          component="img"
          height="-3000"
          image={player.imageUrl}
          alt={player.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {player.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team: {player.team}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nationality: {player.nationality}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jersey Number: {player.jerseyNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {player.age}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Player;
