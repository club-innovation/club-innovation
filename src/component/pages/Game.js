import React from "react";
import "./style/Team.css";
import "./style/Game.css";

import { Polygones } from "../Particle";



function Game() {

  return (
    <div>
      <Polygones />
      <div className="team">
        <h1 className="list-title">
          {" "}
          &#123;Pilot <span className="primary-color">Game</span>&#125;
        </h1>
      </div>
      <div className="GameUi">
        <iframe
          src="https://club-innovation.github.io/Pilot_Webgl/"
          width="960vw"
          height="600wv"
        ></iframe>
      </div>
    </div>
  );
}

export default Game;
