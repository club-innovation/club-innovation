import React from "react";
import "./style/Game.css";

import { Polygones } from "../Particle";



function Game() {
  function requestFullscreen() {
    console.log("hna");
    const iframe = document.querySelector('iframe');
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
      iframe.className="fullscreen";
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
      iframe.msRequestFullscreen();
    }
  }
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
      <div className="list-title">
      <div className="use-desktop">
        <h3>Use Your Desktop !!!</h3>
      </div>
      </div>
      <div className="button-full">
        <input onClick={requestFullscreen} value="Fullscreen" type="button"/>
      </div>
    </div>
  );
}

export default Game;
