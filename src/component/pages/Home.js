import React from "react"
import "./style/Home.css"
import background from "../../imgs/home/background.jpg"

function Home() {
  return (
    <><div className="background">
    
   <img src={background} alt="Background" />

   
    </div>
    <div className="discription">
 <p className="p1"> Welcome <span className="to">To</span></p>
   <p className="p2">&#123;Club<span className="innovation">Innovation</span>&#125;</p>
    <p className="par1">Club Innovation registration is open!</p>
   <p className="par2">Click the button below to register.</p>

     
      </div></>
  )
}

export default Home;