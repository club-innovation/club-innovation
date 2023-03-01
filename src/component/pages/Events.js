import React from "react"
import "./style/Events.css"

//Components
import Description from "../Description"
import List from "../List"
import { Polygones } from "../Particle";

//Images
import calendarPNG from "../../imgs/project_event/calendar.png"

//Data
import EventsData from '../../data/EventsData'

function Events() {
  return (
    <div className="event">
      <Polygones/>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Events</>} 
        description={"The primary goal of EMSI Marrakech's Club Innovation is to cultivate innovation and creativity among its students. To achieve this, the club is dedicated to planning and conducting an array of programming events, workshops, and competitions that inspire students to hone and exhibit their skills and talents."} 
        image={calendarPNG}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">events</span>&#125;</h2>  
       
      <List data={EventsData} page="events"/>
    </div>
  )
}

export default Events;