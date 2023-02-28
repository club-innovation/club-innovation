import React, { useState } from "react";
import "./style/Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Polygones } from "../Particle";
import Discord from '../../imgs/home/discord.png'	
import { Link } from "react-router-dom";
import DiscordIcon from "../../imgs/svg/discord-mark-white2.svg";


function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function sendEmail() {
    const recipient = "contact.clubinnovation@gmail.com";
    const subject = `Contact Us - ${firstName} ${lastName}`;
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phone}\nMessage: ${message}`;
    const messageUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(messageUrl, "_blank");
  }
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
  function handleSubmit(event) {
    event.preventDefault();
    if (!phone || !message) {
      alert("Please fill out all required fields.");
      return;
    }
    sendEmail();
  }

  return (
    <div className="Contact">
      
      <div className="ContainerContact">
        <Polygones/>
        <p className="Info">Contact <span className="primary-color">Us</span></p>
        <div className="ContainerContact1">
          <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                pattern="[0-9]*"
                required
              />
              <br />
              <br />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              <br />
              <br />
              <div className="button">
                <button type="submit">Contact Us</button>
              </div>
              
            </form>
          </div>
          
          
      </div>
      <div className="Container2">
        <div className="Container21">
          <div className="p1ragraph">
            <p className="p1contain">Contact</p>
            <p className="p2contain">contact@emsicoders.com</p>
          </div>
          <div className="p2ragraph">
            <p className="p3contain">Based in</p>
            <p className="p4contain">Marrakech</p>
          </div>  
        </div>    
        <div className="ContainerContact3">
          <ul>
            <li> 
              
                <a href="https://github.com/club-innovation" className="github"  target="_blank">
                 <GitHubIcon className="iconps" alt="GitHub" fontSize="large" />
                </a>
            </li>
            <li>
              <a href="https://www.instagram.com/emsi_innovation/?hl=en" className="insta" target="_blank">
                <InstagramIcon className="iconp" fontSize="large" />
                </a>
           </li>
            <li> 
              <a href="https://discord.gg/GWfhC66hhG" className="discord"  target="_blank">
                <img src={DiscordIcon} className="iconpd" />
              </a>
            </li>
          </ul>
           
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
  );
}

export default Contact;
