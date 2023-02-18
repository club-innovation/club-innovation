import React from "react"
import "./style/Home.css"
import background from "../../imgs/home/background.jpg"

function Home() {
  return (
    <><div className="background">
    
   <img src={background} alt="Background" />
  <nav className="nav1">
  <ul className="ul1">
   <li className="p1"> welcome <span className="to">To</span></li>
   <li className="p2">&#123;Club<span className="innovation">Innovation</span>&#125;</li>
    <li className="par1">Club Innovation registration is open!</li>
   <li className="par2">Click the button below to register.</li>
   </ul></nav>
    </div>
    <div className="sign in">
 
     
      </div></>
  )
}

export default Home;