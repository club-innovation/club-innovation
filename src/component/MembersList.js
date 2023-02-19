import React from "react"
import "./List.css"
import "./pages/style/MembersList.css"
import MembersData from './MembersData'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom"

function MembersList() {
  return (
    <div className="member-list">
        <div className="member-list-container">
            {MembersData.map(member => {
                return (
                 <div className="member-list-card">
                   <div className="particle-background"></div> {/* add this element */}
                        <div className="overlay">
                              <ul className="iconsUl">
                                 <li title="Github Link"><Link to={member.github}><GitHubIcon className="icons" fontSize="large"/></Link></li>
                                 <li title="Linkedin Link"><Link to={member.linkedin}><LinkedInIcon className="icons" fontSize="large"/></Link></li>
                                 <li title="Instagram Link"><Link to={member.instagram}><InstagramIcon className="icons" fontSize="large"/></Link></li>
                              </ul>
                        </div>
                        <div className="image">
                            <img src={member.image} alt="image"/>
                        </div>
                        <div className="contentBox">
                          <h2 className="member-list-name">&#123;{member.name} &#125;</h2>  
                          <h3 className="member-list-poste">{member.role}</h3> 
                        </div> 
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default MembersList;