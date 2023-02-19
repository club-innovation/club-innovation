import { DialerSip } from "@mui/icons-material";
import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <> 
       <div className="Footer">
        <div className="row">
        <div className="container1">
            <div className="title1">want to become a part of our community?</div>
            <a href="" className="link1">Get in touch</a>
            <br/>
            <br/>
            <br/>
            <div> <h2>&#123;Club <span className="inov">Innovation</span>&#125;</h2></div>
            <br/>
            <br/>
            <div className="title2">want to become a part of us?</div>
            <a href="" className="link1">check out our game challenge</a>
          
        </div>
        <div className="container2">
        <div className="title2">keep up with news from us</div>
         <br/>
         <input type={"text"} placeholder="Email" className="Email"/>
         <br/>
         <br/>
         <br/>
         
         <input type={"checkbox" } className="check" /> <div className="signupText">Sign up to our Newsletter, to recieve updates on the latest news releases and special offers.</div> 
           <br/>
           <button className="Subscribe">Subscribe</button>

        </div>

        </div>
        
         <br/>
         <br/>
         <br/>
         <br/>
         <div className="Endfooter">
          <a href=""className="conct"> About </a> <a href=""className="conct"> Our system </a> <a href=""className="conct"> Event </a> <a href=""className="conct"> Members </a><a href=""className="conct"> Contact </a>
          <a href=""className="conct"></a>
         </div>

        
       </div>
      
      
      
    </>

  )
}

export default Footer;