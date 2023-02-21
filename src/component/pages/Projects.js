import React from "react"
import "./style/Projects.css"

//Components
import Description from "../Description"
import List from "../List"

//Images
import projectsSVG from "../../imgs/svg/projects.svg"

//Data
import ProjectsData from '../../data/ProjectsData'

function Projects() {
  return (
    <div className="projects">
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Projects</>} 
        description="Becoming a member of our team means that you will have the opportunity to collaborate on various projects with us. Club Innovation is an excellent platform to enhance your skills and advance your career. If you're seeking personal and professional growth, then our club is the ideal place for you." 
        image={projectsSVG}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">projects</span>&#125;</h2>  
       
      <List data={ProjectsData} page="projects"/>
    </div>
  )
}

export default Projects;