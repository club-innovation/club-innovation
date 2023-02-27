import React, { useState, useEffect } from "react"
import "./style/Information.css"

import { Link, useParams, useNavigate } from "react-router-dom";

//Components
import Description from "../Information_Description"
import MembersList from "../MembersList"
import GoogleMap from "../GoogleMap"
import { Polygones } from "../Particle";

//Data
import ProjectsData from "../../data/ProjectsData"
import EventsData from "../../data/EventsData"

function Information({ type }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const typeTitle = type === "projects" ? "Project" : "Event";
    const [imageSliderIndex, setImageSliderIndex] = useState(0);

    useEffect(() => {
        //move to the top of page
        window.scrollTo(0, 0)
    }, [id])

    function GetData() {
        if (type === "projects") return ProjectsData[id];
        if (type === "events") return EventsData[id];
        
        return null;
    }

    function ChangeImage(value)
    {
        if(value < 0 || value > GetData().images.length-1) return;

        setImageSliderIndex(value);
    }
    function ChangeImageLeft()
    {
        var count = imageSliderIndex;
        count = count-1 === 0 ? GetData().images.length-1 : count-1;

        setImageSliderIndex(count);
    }
    function ChangeImageRight()
    {
        var count = imageSliderIndex;
        count = count+1 === GetData().images.length ? 0 : count+1;

        setImageSliderIndex(count);
    }

    return (
        <div className="information">
            {GetData() ? 
            <>
            <Polygones/>
            <h1 className="list-title">&#123;<span className="primary-color">{GetData().title}</span>&#125;</h1>
                    <Description title={typeTitle + " Description"} description={GetData().description} image={ProjectsData[id].images[imageSliderIndex].url} ActionLeft={ChangeImageLeft} ActionRight={ChangeImageRight}/>

            <div className="information-detail">
                <div className="information-detail-images">
                    <div className="images-slider">
                        { GetData().images.map((image,index)=>{
                            return (<img key={index} src={image.url} alt="" onClick={() => ChangeImage(index)}/>)
                        })
                        }
                    </div>
                </div>
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

            <h1 className="list-title"> &#123;Place <span className="primary-color">Of </span>The <span className="primary-color">{typeTitle}</span>&#125;</h1>

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
            </> 
            : 
            <> {navigate("/notFound")} </>}
        </div>
    )
}

export default Information;