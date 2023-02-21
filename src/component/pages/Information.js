import React from "react"
import "./style/Information.css"

import { useParams } from "react-router-dom";

//Components
import Description from "../Description"
import MembersList from '../MembersList'

//Data
import ProjectsData from "../../data/ProjectsData"
import EventsData from "../../data/EventsData"


function Information({type}) {

    const { id } = useParams();

    function GetData()
    {
        if (type === "projects") return ProjectsData;
        if (type === "events") return EventsData;

        return null;
    }

    return (
        <div className="information">
            <h1 className="list-title">&#123;<span className="primary-color">Information</span>&#125;</h1>
            <Description title="EVENT DESCRIPTION" description="A coding event is an organized gathering or competition where individuals or teams of programmers come together to solve coding challenges or work on coding projects. These events are often hosted by universities, coding communities, or technology companies and can range from hackathons to coding challenges or coding bootcamps. Participants have the opportunity to learn new coding skills, network with other programmers, and showcase their programming abilities." image={ProjectsData[id].image} />
        
            <div className="information-detail">
                <div className="information-detail-info">
                    <div className="information-detail-info-data">
                        <h3>Timing</h3>
                        <p>00:00</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>Event Duration</h3>
                        <p>Two hours</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>Date</h3>
                        <p>00-00-0000</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>City</h3>
                        <p>Marrakech</p>
                    </div>
                </div>
            </div>
           
            <h1 className="list-title"> &#123;Meet The <span className="primary-color">Organizers</span>&#125;</h1>
            <MembersList data={GetData()[id].organizers} />
        
        </div>
    )
}

export default Information;