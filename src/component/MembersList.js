import React from "react"
import "./List.css"
import "./pages/style/MembersList.css"
import MembersData from './MembersData'
import {FaGithub} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa"

function MembersList() {
  return (
    <div className="member-list">
        <div className="member-list-container">
            {MembersData.map(member => {
                return (
                 <div className="member-list-card">
                        <div className="overlay">
                              <ul className="iconsUl">
                                 <li title="Github Link"><Link to={member.github}><FaGithub className="icons" /></Link></li>
                                 <li title="Linkedin Link"><Link to={member.linkedin}><FaLinkedin className="icons"/></Link></li>
                                 <li title="Instagram Link"><Link to={member.instagram}><FaInstagram className="icons"/></Link></li>
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