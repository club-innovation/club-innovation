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
        description={"Club Innovation is dedicated to promoting innovation and creativity among the students of EMSI Marrakech. The club's primary responsibility is to conduct a range of programming events, workshops and competitions."} 
        image={projectsSVG}/>
    </div>
  )
}

export default Events;