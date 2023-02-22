import React from "react"
import "./style/Information.css"

import { Link, useParams } from "react-router-dom";

//Components
import Description from "../Description"
import MembersList from "../MembersList"
import GoogleMap from "../GoogleMap"

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

    function GetMap(src)
    {
        return (<div className="information-map-viewer">
            <iframe src={src} width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>);
    }
    
    const typeTitle = type === "projects" ? "PROJECT DESCRIPTION" : "EVENT DESCRIPTION";
    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13586.747898394668!2d-8.025867060727096!3d31.642419969080752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef9ce2003acb%3A0xbf12ed0e32f9fa0c!2sEcole%20Marocaine%20Des%20Sciences%20de%20l&#39;Ing%C3%A9nieur!5e0!3m2!1sfr!2sma!4v1677022835335!5m2!1sfr!2sma";

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
                <div className="information-map-viewer">
                    <GoogleMap lat={GetData().map.lat} lon={GetData().map.lon} />
                </div>
                <div className="information-map-details">
                    <h1><span className="primary-color">WHERE</span></h1>
                    <p>{GetData().adresse}</p>
                    <Link target="_blank" to={GetData().link}><button>Join Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Information;