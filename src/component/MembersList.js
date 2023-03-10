import React from "react"
import "./List.css"
import "./MembersList.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom"

function MembersList({ data }) {
  return (
    <div className="member-list">
      <div className="member-list-container">
        {data.map((member, index) => {
          return (
            <div className="member-list-card" key={index}>
              <div className="overlay">
                <ul className="iconsUl">
                  {member.github === '' ? <></> : <li title="Github Link"><Link target="_blank" to={member.github}><GitHubIcon className="icons" fontSize="large" /></Link></li>}
                  {member.linkedin === '' ? <></> : <li title="Linkedin Link"><Link target="_blank" to={member.linkedin}><LinkedInIcon className="icons" fontSize="large" /></Link></li>}
                  {member.instagram === '' ? <></> : <li title="Instagram Link"><Link target="_blank" to={member.instagram}><InstagramIcon className="icons" fontSize="large" /></Link></li>}
                </ul>
              </div>
              <div className="image">
                <img src={member.image} alt="image" />
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