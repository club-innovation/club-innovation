import React from "react"
import "./style/Projects.css"

//Components
import Description from "../Description"
import List from "../List"
import { Polygones } from "../Particle";

//Images
import creativityPNG from "../../imgs/project_event/creativity.png"

//Data
import ProjectsData from '../../data/ProjectsData'

function Projects() {
  return (
    <div className="projects">
      <Polygones/>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Projects</>} 
        description="Becoming a member of our team means that you will have the opportunity to collaborate on various projects with us. Club Innovation is an excellent platform to enhance your skills and advance your career. If you're seeking personal and professional growth, then our club is the ideal place for you." 
        image={creativityPNG}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">projects</span>&#125;</h2>  
       
      <List data={ProjectsData} page="projects"/>
    </div>
  )
}

export default Projects;