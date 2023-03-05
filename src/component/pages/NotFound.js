import React, { useEffect } from "react"
import "./style/NotFound.css"

import { Stars } from "../Particle";

//Images
import astronaut from "../../imgs/notFound/astronaut.svg"
import earth from "../../imgs/notFound/earth.svg"
import moon from "../../imgs/notFound/moon.svg"
import fog from "../../imgs/notFound/fog.svg"

function NotFound() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    scrollToTop();
  }, []);

  return (
    <>
    <Stars />
    <div className="notFound">
      <div className="notFound-space">
        <img id="notFound-moon" className="rotate" src={moon} alt="moon" />
        <img id="notFound-fog" src={fog} alt="fog" />
        <img id="notFound-earth" className="rotate-30" src={earth} alt="earth" />
        <img id="notFound-astronaut" className="floating" src={astronaut} alt="Astronaut" />

          <div className="notFound-description">
          <h2>&#123;<span className="primary-color">404</span>&#125;</h2>
          <h4>Page not <span className="primary-color">found!</span></h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound;
