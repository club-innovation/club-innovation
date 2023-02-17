import React from "react"
import "./style/Projects.css"

//Components
import Description from "../Description";

//Images
import projectsSVG from "../../imgs/svg/projects.svg"

function Projects() {
  return (
    <div>
      <Description 
        title={<>Club <span className="primary-color">Innovation</span> Projects</>} 
        description={"Joining our team allows you to participate in projects that we will all do together!\nClub Innovation is the perfect place for you if you want to boost your skills and develop your career."} 
        image={projectsSVG}/>
    </div>
  )
}

export default Projects;