import React from "react"
import { useState } from "react"
import "./Navbar.css"
import closebtn from "../imgs/svg/close.svg"
import hamburger from "../imgs/svg/hamburger.svg"

import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [bar, setBar] = useState({ isHidden: false });


  function toggleHidden() {
      setBar({ isHidden: !bar.isHidden });
  }

  const style = { visibility: bar.isHidden ? 'hidden' : 'visible' };

  return (
    <>
    <div className="navbar-container">
    <h1>&#123;Club<span className="primary-color">Innovation</span>&#125;</h1>
      <div className="navbar">
        <nav className="navigation" style={style}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <a onClick={toggleHidden}>
        {bar.isHidden ?
        (<img className="hamburger-btn" src={hamburger} alt="hamburger button"/>) : (<img className="hamburger-btn" src={closebtn} alt="hamburger button"/>)}
        </a>
      </div>
    </div>
      

      <Outlet />
    </>
  )
}

export default Navbar;