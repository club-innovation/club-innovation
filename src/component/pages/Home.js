import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";

//Images
import coding from "../../imgs/home/coding.gif";
import programming from "../../imgs/home/programming.gif";
import projects from "../../imgs/home/projects.gif";
import terminal from "../../imgs/home/terminal.gif";
import ending from "../../imgs/home/ending.gif";
import help from "../../imgs/home/help.gif";

//Components
import HomeCards from "../HomeCards";
import { Polygones } from "../Particle";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Polygones/>
      <div className="background">
        <div className="description-home">
          <div className="description-title">
            <div class="typewriter">
            <h1>
              Welcome <span className="primary-color">To</span>
            </h1>
            </div>
            <h3>
              &#123;Club<span className="primary-color">Innovation</span>&#125;
            </h3>
          </div>
          <div className="description-text">
            <p>
              Free your creative mind and improve your computer skills by
              <span>
                participating in various projects and training programs with us,
              </span>
              <span> and have fun while doing it!</span>
            </p>
            <br />
            <br />
            <br />
            <br />
            
            <Link to="/about" onClick={scrollToTop}>
              <button>
              Explore
              </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="club-information-container">
        <h2>
          &#123;What is Club<span className="primary-color">Innovation?</span>
          &#125;
        </h2>
        <div className="club-info">
        <div className="club-info-img">
            <img src={coding} alt=""></img>
          </div>
          <div className="club-info-left">
            <div>
              <p>
                  Club Innovation is an organization at EMSI Marrakech that aims to
                  inspire innovation and creativity among students, particularly
                  those with interests in computing. The club is responsible for
                  planning and hosting various programming events, workshops, and
                  competitions that provide opportunities for students to showcase
                  their skills and talents.
                </p>
                <div className="text-container">
                   <p>
                      Discover the Emsi Innovation System a system where you will have fun and learn at the same time
                   </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer">
        <h2>
          &#123;What We Offer <span className="primary-color">You?</span>&#125;
        </h2>

          <div className="container">
            <HomeCards title="Learning Resources" description="Free Online resources for learning and obtaining certificates
                  in many areas related to computer sience." image={programming}/>

            <HomeCards description="We will have a lot of projects ! Several teams will be formed
                  And We will all work together on fun projects!" image={projects} title="Projects"/>

            <HomeCards description="Do you have a competitive spirit? We will organize
                  competitions." image={terminal} title="Competitions"/>

             <HomeCards description="Stuck and want help? Our dicord is here for you." image={help} title="Help"/>
        </div>
      </div>
      <div className="home-ending">
        <div className="image-home" >
              <img src={ending} alt=""/>
        </div>
        <div className="home-ending-content">
            <p >&#123;What Are You <span className="primary-color">Waiting For?</span>&#125;</p>
            <div className="but-ending">
            <Link to="/about" onClick={scrollToTop}>
              <input type="button" value="Explore"/>
            </Link>
               
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
