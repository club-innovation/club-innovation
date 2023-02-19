import React from "react"
import { useState, useEffect } from "react"
import "./Navbar.css"
import closebtn from "../imgs/svg/close.svg"
import hamburger from "../imgs/svg/hamburger.svg"

import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [bar, setBar] = useState({ isHidden: false });
  const style = { visibility: bar.isHidden ? 'hidden' : 'visible' };

  function toggleHidden() {
    setBar({ isHidden: !bar.isHidden });
  }
  function toggleNav()
  {
    if(window.innerWidth <= 800)
    {
      toggleHidden();
    }
  }
  function toggleOverflow()
  {
    //fix overflow in mobile navbar 
    if(window.innerWidth <= 800 && !bar.isHidden)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "visible";
  }

  useEffect(()=>{
    setBar({ isHidden: window.innerWidth <= 800 });
  },[]);

  useEffect(() => {
    toggleOverflow();
  }, );

  useEffect(() => {
    const resizeListener = () => {
      toggleOverflow();
      setSmallScreen(false);
      if(window.innerWidth <= 800)
      {
        setSmallScreen(true);
      }
    };
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  return (
    <>
    <div className="navbar-container">

    <h1>&#123;Club<span className={smallScreen && !bar.isHidden ? 'secondary-color' : 'primary-color'}>Innovation</span>&#125;</h1>

      <div className="navbar">
        <nav className="navigation" style={style}>
          <ul onClick={toggleNav}>
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