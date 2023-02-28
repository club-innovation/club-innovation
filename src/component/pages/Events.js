import "./style/Events.css"
import Discord from '../../imgs/home/discord.png'	
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
//Components
import Description from "../Description"
import List from "../List"
import { Polygones } from "../Particle";

//Images
import eventGIF from "../../imgs/gif/event.gif"

//Data
import EventsData from '../../data/EventsData'

function Events() {
  
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
    <div className="event">
      <Polygones/>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Events</>} 
        description={"The primary goal of EMSI Marrakech's Club Innovation is to cultivate innovation and creativity among its students. To achieve this, the club is dedicated to planning and conducting an array of programming events, workshops, and competitions that inspire students to hone and exhibit their skills and talents."} 
        image={eventGIF}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">events</span>&#125;</h2>  
       
      <List data={EventsData} page="events"/>
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

export default Events;