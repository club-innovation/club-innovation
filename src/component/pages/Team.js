import React from "react";
import "./style/Team.css";
import MembersList from '../MembersList';

//Data
import MembersData from '../../data/MembersData';
import { Polygones } from "../Particle";

function Team() {
  return (
    <div className="team">
      <Polygones/>
      <h1 className="list-title"> &#123;Meet The <span className="primary-color">Team</span>&#125;</h1>  
      <MembersList data={MembersData}/>
    </div>
  )
}

export default Team;