
import { Link } from "react-router-dom";
import React, { useState }  from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiscordIcon from "../imgs/svg/discord-mark-white1.svg";

import {addEmail}from "../utils/firestore";

function Footer() {

  const [email, setEmail] = useState(""); 
  const [isChecked, setIsChecked] = useState(false);

  const [message, setMessage] = useState('');
  const [showMessage,setShowMessage]=useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  function handleInputChange(event) {
    setEmail(event.target.value.trim());
  }

  function validateEmail() {
    const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (rejex.test(email)) {
      addEmail(new Date().toLocaleString(),email,isChecked);
      setMessage("You have successfully subscribed.");
      setEmailValid(true);
    } else {
       setMessage("Please enter a valid email address.");
       setEmailValid(false);
    }
    setShowMessage(true);
  }
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2 className="footer__title">
            Want to become part of our community?
          </h2>
          <Link to="/" className="footer__link" onClick={scrollToTop}>
          Get in touch
          </Link>
          <h1 className="footer__logo">
            <span className="footer__logo-text"> &#123;Club</span> Innovation{" "}
            <span className="footer__logo-text">&#125;</span>
          </h1>
          <h2 className="footer__title">Want to be part of Us?</h2>
          <Link to="/game" className="footer__link" onClick={scrollToTop}>
            Check out our game challenge
          </Link>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Keep up with news from us</h2>
          <input className="footer__input" type="email" placeholder="Email" value={email} onChange={handleInputChange}/>
          {showMessage && <p className="message" style={{ color: isEmailValid ? 'green' : 'red' }} >{message}</p>}

          <label>
            <input className="footer__checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Sign up to our newsletter, to receive updates on the latest news
            releases and special offers.
          </label>
          <p>
            <button className="footer__button" onClick={validateEmail}>Subscribe</button>
          </p>
        </div>
      </div>
      <nav className="footer__nav">
        <Link to="/about" className="footer__nav-link" onClick={scrollToTop}>
          About
        </Link>
        <Link to="/projects" className="footer__nav-link" onClick={scrollToTop}>
          Projects
        </Link>
        <Link to="/events" className="footer__nav-link" onClick={scrollToTop}>
          Events
        </Link>
        <Link to="/team" className="footer__nav-link" onClick={scrollToTop}>
          Team
        </Link>
        <Link to="/contact" className="footer__nav-link" onClick={scrollToTop}>
          Contact
        </Link>
      </nav>

      <div className="footer__social">
        <a
          href="https://github.com/club-innovation"
          className="footer__social-link"
          target="_blank"
        >
          <GitHubIcon className="footer__social-icon" alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/emsi_innovation/?hl=en"
          className="footer__social-link"
          target="_blank"
        >
          <InstagramIcon className="footer__social-icon" alt="Instagram" />
        </a>
        <a href="#" className="footer__social-link"  target="_blank">
          <LinkedInIcon className="footer__social-icon" alt="LinkedIn" />
        </a>
        <a href="https://discord.gg/GWfhC66hhG" className="footer__social-link"  target="_blank">
          <img
            src={DiscordIcon}
            className="footer__social-icon-disc"
            alt="Discord"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
