import React from "react";
import "./style/Home.css";
import background from "../../imgs/home/background.jpg";
import logo1 from "../../imgs/home/coding.png";
import programming from "../../imgs/home/programming.gif";
import project from "../../imgs/home/project.svg";
import projects from "../../imgs/home/projects.gif";
import terminal from "../../imgs/home/terminal.gif";
import helps from "../../imgs/home/helps.gif";
function Home() {
  return (
    <div>
      <div className="background">
        <div className="discription">
          <p className="p1">
            {" "}
            Welcome <span className="primary-color">To</span>
          </p>
          <p className="p2">
            &#123;Club<span className="primary-color">Innovation</span>&#125;
          </p>
          <p className="p3">
            Free your creative mind and improve your computer skills by
            <span>
              participating in various projects and training programs with us,
            </span>
            <span> and have fun while doing it!</span>
          </p>
        </div>
      </div>
      <div className="club-information">
        <p className="club-information-title">
          &#123;What is Club<span className="primary-color">Innovation?</span>
          &#125;
        </p>
        <div className="club-info">
          <div className="par">
            <p className="para">
              Club Innovation is an organization at EMSI Marrakech that aims to
              inspire innovation and creativity among students, particularly
              those with interests in computing. The club is responsible for
              planning and hosting various programming events, workshops, and
              competitions that provide opportunities for students to showcase
              their skills and talents.
            </p>
            <div className="par1">
              <p className="para2">
                The Club system provides an array of enjoyable and educational
                activities and events that enable you to learn while having fun.
              </p>
            </div>
          </div>
          <div className="info2-img">
            <img src={logo1}></img>
          </div>
        </div>
      </div>
      <div className="offer">
        <p className="offer-title">
          &#123;What We Offer <span className="primary-color">You?</span>&#125;
        </p>

        <div className="lists">
          <div className="container">
            {/* first one */}
            <div className="home-list">
              <div className="home-list-gif">
                <img src={programming}></img>
              </div>
              <div className="home-list-description">
                <p className="home-list-description-title">
                  Learning Resources
                </p>
                <p className="home-list-description-paragraph">
                  Free Online resources for learning and obtaining certificates
                  in many areas related to computer sience.
                </p>
              </div>
            </div>
            {/* second one */}
            <div className="home-list">
              <div className="home-list-gif">
                <img src={projects}></img>
              </div>
              <div className="home-list-description">
                <p className="home-list-description-title">Projects</p>
                <p className="home-list-description-paragraph">
                  We will have a lot of projects ! Several teams will be formed
                  And We will all work together on fun projects!
                </p>
              </div>
            </div>
            {/* third one */}
            <div className="home-list">
              <div className="home-list-gif">
                <img src={terminal}></img>
              </div>
              <div className="home-list-description">
                <p className="home-list-description-title">Competitions</p>
                <p className="home-list-description-paragraph">
                  Do you have a competitive spirit? We will organize
                  competitions.
                </p>
              </div>
            </div>
            {/* fourth one */}
            <div className="home-list">
              <div className="home-list-gif">
                <img src={helps}></img>
              </div>
              <div className="home-list-description">
                <p className="home-list-description-title">Help</p>
                <p className="home-list-description-paragraph">
                  Stuck and want help? Our discord is here for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
