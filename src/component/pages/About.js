import "./style/About.css"

//Components
import Description from "../About_Description"
import GoogleMap from "../GoogleMap"
import { Polygones } from "../Particle"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Images
import teamwork from "../../imgs/AboutUs/AboutUs.gif"
import Vision from "../../imgs/AboutUs/Vision.gif" 
import build from "../../imgs/AboutUs/build.gif"
import Discord from '../../imgs/home/discord.png'

function About() {   
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
     <div className="about">
      <Polygones/>
        <Description 
            title={<>About <span className="primary-color">Us</span></>} 
            description={"The Innovation Club at Moroccan School of Engineering Sciences (EMSI) unites computer enthusiasts with the goal of satisfying their curiosity in the IT field and supporting them in their coursework. Our aim is to cultivate a passion for staying up-to-date with global progress through training in programming languages, web development, mobile development, and other areas. We also promote collective work among our members through competitions, projects, and other activities."} 
            image={teamwork}
            ImageClass = "img-teamwork"
         />
         <Description
            title={<>Assignment</>} 
            description={"Create value by providing realistic and actionable recommendations to help you make the best growth and development decisions for your projects."} 
            image={build}
            ImageClass = "last-item img-build"
         />
        <Description 
            title={<>Vision</>} 
            description={"Our vision is to provide a platform for every EMSI student to flourish and pursue their interests. Within 5 years, we aim to become the foremost computer community in Morocco, recognized for our exceptional projects and accomplishments in various competitions. As a result, we aspire to have a significant impact on the IT industry in Morocco."} 
            image={Vision}
            ImageClass = "img-vision"
        />
        <div className="description">
            <div className="description-map last-item">
               <GoogleMap lat={31.63122053463084} lon={-8.012774493797531} />
            </div>
            <div className="description-details">
              <h2>Location</h2>
              <p>Our club innovation is situated in the vibrant city of <span className="primary-color"><b>Marrakech</b></span> at the intersection of Bv Hassan II and Rue Yougoslavie, We invite you to visit us at our location</p>
            </div>
        </div>
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

export default About;