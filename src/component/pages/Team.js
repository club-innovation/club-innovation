import Discord from '../../imgs/home/discord.png'	
import { Link } from "react-router-dom";
import "./style/Team.css";
import MembersList from '../MembersList';

//Data
import MembersData from '../../data/MembersData';
import { Polygones } from "../Particle";
import React, { useState, useEffect } from "react";

function Team() {
  const [isVisible, setIsVisible] = useState(false);
  function returnToHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  const scrollListener = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    const progressValue = document.querySelector(".progress-value");
    const progressScroll = document.querySelector(".progress");
    progressValue.textContent = Math.round(scrollPercentage) + "%";
    progressScroll.style.background = `conic-gradient(#8CEFE9 ${scrollPercentage}%, #070E21 ${scrollPercentage}%)`;
  }
  window.addEventListener("scroll", scrollListener);
  window.onscroll = function () {
    if(window.scrollY >= 80) {
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  }
  return (
    <div className="team">
      <Polygones/>
      <h1 className="list-title"> &#123;Meet The <span className="primary-color">Team</span>&#125;</h1>  
      <MembersList data={MembersData}/>
      <div className="icons-left">
        <div className="icons-container">
          <Link target="blank_" to="https://discord.gg/ZB3GbCsG">
            <span className="discord-icon" onClick={returnToHome}>
              <img src={Discord}/>
            </span>
          </Link>
          {isVisible && 
            <div className="progress">
              <span className="progress-value" onClick={returnToHome}>0%</span>
            </div>
          }
        </div>
    </div>
    </div>
  )
}

export default Team;