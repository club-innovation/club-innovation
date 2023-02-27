import React, { useState } from "react"
import "./Description.css"
import "./InformationDescription.css"


function InformationDescription({ title, description, image, ActionLeft, ActionRight }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="description">
            <div className="description-image" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={image} alt="sticker"/>
                {isShown && (
                    <div className="description-image-slider">
                        <p onClick={ActionLeft}>&lt;</p>
                        <p onClick={ActionRight}>&gt;</p>
                    </div>
                )}
            </div>
            <div className="description-details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default InformationDescription;