import React from "react";
import "./style/Team.css";
import MembersList from '../MembersList';

function Team() {
  return (
    <div className="team">
      <h1 className="list-title"> &#123;Meet The <span className="primary-color">Team</span>&#125;</h1>  
      <MembersList />
    </div>
  )
}

export default Team;