import React from "react"
import "./style/Information.css"

import { Link, useParams } from "react-router-dom";

//Components
import Description from "../Description"
import MembersList from '../MembersList'

//Data
import ProjectsData from "../../data/ProjectsData"
import EventsData from "../../data/EventsData"

function Information({ type }) {

    const { id } = useParams();

    
    
    function GetData() {
        if (type === "projects") return ProjectsData[id];
        if (type === "events") return EventsData[id];
        
        return null;
    }
    
    const typeTitle = type === "projects" ? "PROJECT DESCRIPTION" : "EVENT DESCRIPTION";
    const mapLink = `https://www.bing.com/maps/embed?h=400&w=500&cp=${GetData().map.lat}~${GetData().map.lon}&lvl=18&typ=d&sty=r&src=SHELL&FORM=MBEDV8&pushpins=${GetData().map.lat}_${GetData().map.lon}`;

    return (
        <div className="information">
            <h1 className="list-title">&#123;<span className="primary-color">{GetData().title}</span>&#125;</h1>
            <Description title={typeTitle} description={GetData().description} image={ProjectsData[id].image} />

            <div className="information-detail">
                <div className="information-detail-info">
                    <div className="information-detail-info-data">
                        <h3>Timing</h3>
                        <p>{GetData().time}</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>Duration</h3>
                        <p>{GetData().duration}</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>Date</h3>
                        <p>{GetData().date}</p>
                    </div>
                    <div className="information-detail-info-data">
                        <h3>City</h3>
                        <p>{GetData().city}</p>
                    </div>
                </div>
            </div>

            <h1 className="list-title"> &#123;Meet The <span className="primary-color">Organizers</span>&#125;</h1>
            <MembersList data={GetData().organizers} />

            <h1 className="list-title"> &#123;Place <span className="primary-color">Of </span>The <span className="primary-color">Event</span>&#125;</h1>

            <div className="information-map">
                <div className="information-map-details">
                    <h1><span className="primary-color">WHERE</span></h1>
                    <p>{GetData().adresse}</p>
                    <Link target="_blank" to={GetData().link}><button>Join Us</button></Link>
                </div>
                <div className="information-map-viewer">
                    <iframe width="500" height="400" frameborder="0" src={mapLink}></iframe>
                    <div style={{whiteSpace: "nowrap", textAlign: "center", width: 500, padding: "6px 0"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Information;