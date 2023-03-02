import "./style/Projects.css"

//Components
import Description from "../Description"
import List from "../List"
import { Polygones } from "../Particle";
import Discord from '../../imgs/home/discord.png'	
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//Images
import creativityPNG from "../../imgs/project_event/creativity.png"

//Data
import ProjectsData from '../../data/ProjectsData'

function Projects() {
  
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
    <div className="projects">
      <Polygones/>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Projects</>} 
        description="Becoming a member of our team means that you will have the opportunity to collaborate on various projects with us. Club Innovation is an excellent platform to enhance your skills and advance your career. If you're seeking personal and professional growth, then our club is the ideal place for you." 
        image={creativityPNG}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">projects</span>&#125;</h2>  
       
      <List data={ProjectsData} page="projects"/>
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

export default Projects;