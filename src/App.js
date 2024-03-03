import React, { Component } from "react";
import "./App.css"; // Import your CSS file
import PlayersList from "./PlayersList";
import NaveBare from "./Components/NaveBare";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NaveBare />
      <br />
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
