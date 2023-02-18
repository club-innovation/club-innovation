import React from "react"
import "./style/Events.css"

//Components
import Description from "../Description";

//Images
import projectsSVG from "../../imgs/svg/calender.svg"

function Events() {
  return (
    <div>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Events</>} 
        description={"The main objective of Club Innovation at EMSI Marrakech is to foster innovation and creativity among the student body. To accomplish this, the club is responsible for organizing and hosting a variety of programming events, workshops, and competitions, aimed at encouraging students to develop and showcase their skills and talents."} 
        image={projectsSVG}/>
    </div>
  )
}

export default Events;