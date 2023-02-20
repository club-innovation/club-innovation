import { DialerSip } from "@mui/icons-material";
import React from "react"
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <> 
       <div className="Footer">
        <div className="row">
        <div className="container1">
            <div className="tit1" >want to become a part of our community?</div>
            <a href="" className="link1">Get in touch</a>
           < br/>
           < br/>
          
            <div> <h1 className="LogoInovation">&#123;Club <span className="inov">Innovation</span>&#125;</h1></div>
               
            <div className="tit2">want to become a part of us?</div>
            <br/>
            <br/>
            <a href="" className="link1" ><div className="link2">check out our game challenge</div></a>
          
        </div>
        <div className="container2">
        <div className="tit1">keep up with news from us</div>
        
         <input type={"text"} placeholder="Email" className="Email"/>
         <br/>
         <br/>
      
         
         <input type={"checkbox" } className="check" color="--primary-color" /> <div className="signupText">Sign up to our Newsletter, to recieve updates on the latest news releases and special offers.</div> 
           <br/>
           <button className="Subscribe">Subscribe</button>

        </div>

        </div>
        
        
         <br/>
         <br/>
         <br/>
          
         <div className="Endfooter">
           <div className="contact">
           <a href=""className="conct"> About </a> <a href=""className="conct"> Our system </a> <a href=""className="conct"> Event </a> <a href=""className="conct"> Members </a><a href=""className="conct"> Contact </a>
           <a href=""className="conct">Learn</a> <a href=""className="icon"></a>
           </div>
           <div className="incons">
            <a  href=""className="icon"> <InstagramIcon className="header-icon"  /></a>
            <a  href=""className="icon"> <GitHubIcon className="header-icon"  /></a>
            <a  href=""className="icon"> <TwitterIcon className="header-icon"  /></a>
            <a  href=""className="icon"> <LinkedInIcon className="header-icon"  /></a>
           </div>
         
         </div>
         
        
       </div>
      
      
      
    </>

  )
}

export default Footer;