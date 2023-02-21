import { Home } from "@mui/icons-material";
import React from "react"
import "./pages/style/Home.css"


function HomeCards({title, description, image}) {
  return (
    <div className="home-card">
            <div className="home-list-gif">
                <img src={image}></img>
            </div>
            <div className="home-list-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
     </div>
  )
}

export default HomeCards;