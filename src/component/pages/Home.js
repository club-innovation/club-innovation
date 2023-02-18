import React from "react"
import "./style/Home.css"
import background from "../../imgs/home/background.jpg"

function Home() {
  return (
    <div className="background">
      <img src={background} alt="Background"/>
    </div>
  )
}

export default Home;