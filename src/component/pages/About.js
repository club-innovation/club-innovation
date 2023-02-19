import React from "react"
import "./style/About.css"

//Components
import Description from "../About_Description"
import List from "../List"

//Images
import teamwork from "../../imgs/svg/teamwork.svg"
import Vision from "../../imgs/svg/vision.svg" 
import build from "../../imgs/svg/build.svg"

function About() {
  return (
     <>
        <Description 
            title={<>About <span className="primary-color">Us</span></>} 
            description={"Emsicoders is a part of Innovation Club of students of the Moroccan School of Engineering Sciences (EMSI), which brings together computer enthusiasts. It aims to satisfy your curiosity about the IT field and support you in your course. We want to create a passion in the mind of the student in order to keep pace with global progress, which we will provide training (programming languages, web development, mobile development, etc.) as well as collective work between the members of club (Competitions, projects...)."} 
            image={teamwork}
            ImageClass = "img-teamwork"
         />
         <Description
            title={<>Assignment</>} 
            description={"Create value by providing realistic and actionable recommendations to help you make the best growth and development decisions for your projects."} 
            image={build}
            ImageClass = "last-item img-build"
         />
        <Description 
            title={<>Vision</>} 
            description={"Our vision is to allow all EMSI students to have a place where they can grow and meet their passion. In 5 years, we will be the best computer community in Morocco. We will create projects and we will win several competitions and thus have a great influence in the field of IT in Morocco."} 
            image={Vision}
            ImageClass = "img-vision"
        />
     </>
  )
}

export default About;