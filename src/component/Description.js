import React from "react"
import "./Description.css"


function Description({title, description, image}) {
  return (
    <div className="description">
        <img src={image} alt="sticker"/>
        <div className="description-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default Description;