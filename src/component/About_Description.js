import React from "react"
import "./pages/style/About.css"

function Description({title, description, image ,ImageClass}){

    return (
        <div className="description">
            <div className={ImageClass}>
                <img src={image} alt="sticker"/>
            </div>
            <div className="description-details">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
        </div>
    )          
   
}
  
export default Description;
 
   