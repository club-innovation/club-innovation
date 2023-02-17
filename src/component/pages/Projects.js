import React from "react"
import "./style/Projects.css"

//Components
import Description from "../Description"
import List from "../List"

//Images
import projectsSVG from "../../imgs/svg/projects.svg"

function Projects() {
  return (
    <div>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Projects</>} 
        description={"Joining our team allows you to participate in projects that we will all do together!\nClub Innovation is the perfect place for you if you want to boost your skills and develop your career."} 
        image={projectsSVG}/>

      <h2 className="list-title">&#123;Upcoming <span className="primary-color">projects</span>&#125;</h2>  
       
      <List/>
    </div>
  )
}

export default Projects;