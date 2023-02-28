import { DialerSip } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DiscordIcon from "../imgs/svg/discord-mark-white1.svg";

function Footer() {
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
          <input type="email" placeholder="Email" className="footer__input" />
          <label>
            <input type="checkbox" className="footer__checkbox" />
            Sign up to our newsletter, to receive updates on the latest news
            releases and special offers.
          </label>
          <p>
            <button className="footer__button">Subscribe</button>
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
        >
          <GitHubIcon className="footer__social-icon" alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/emsi_innovation/?hl=en"
          className="footer__social-link"
        >
          <InstagramIcon className="footer__social-icon" alt="Instagram" />
        </a>
        <a href="#" className="footer__social-link">
          <LinkedInIcon className="footer__social-icon" alt="LinkedIn" />
        </a>
        <a href="https://discord.gg/GWfhC66hhG" className="footer__social-link">
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
