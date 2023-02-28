import { DialerSip } from "@mui/icons-material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2 className="footer__title">Want to become part of our community?</h2>
          <a href="#" className="footer__link">Get in touch</a>
          <h1 className="footer__logo">
           <span className="footer__logo-text"> &#123;Club</span> Innovation <span className="footer__logo-text">&#125;</span>
          </h1>
          <h2 className="footer__title">Want to be part of Us?</h2>
          <a href="/#/game" className="footer__link">Check out our game challenge</a>
        </div>
        <div className="footer__section">
          <h2 className="footer__title">Keep up with news from us</h2>
          <input type="email" placeholder="Email" className="footer__input" />
          <label>
            <input type="checkbox" className="footer__checkbox" />
            Sign up to our newsletter, to receive updates on the latest news releases and special offers.
          </label>
          <p><button className="footer__button">Subscribe</button></p>
        </div>
      </div>
      <nav className="footer__nav">
        <a href="#" className="footer__nav-link">About</a>
        <a href="#" className="footer__nav-link">Our System</a>
        <a href="#" className="footer__nav-link">Events</a>
        <a href="#" className="footer__nav-link">Members</a>
        <a href="#" className="footer__nav-link">Contact</a>
      </nav>
      <div className="footer__social">
        <a href="#" className="footer__social-link">
          <InstagramIcon className="footer__social-icon" alt="Instagram" />
        </a>
        <a href="#" className="footer__social-link">
          <GitHubIcon className="footer__social-icon" alt="GitHub" />
        </a>
        <a href="#" className="footer__social-link">
          <TwitterIcon className="footer__social-icon" alt="Twitter" />
        </a>
        <a href="#" className="footer__social-link">
          <LinkedInIcon className="footer__social-icon" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
