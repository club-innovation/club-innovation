import React, { useState, useEffect } from "react"
import "./FloatButtons.css"
import { Link } from "react-router-dom"
//Images
import Discord from "../imgs/png/discord.png"

function FloatButtons() {
    const [isVisible, setIsVisible] = useState(false);

    window.onscroll = function () {
        if (window.scrollY >= 80) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }
    }
    function returnToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    useEffect(() => {
        const scrollListener = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
            const progressValue = document.querySelector(".progress-value");
            const progressScroll = document.querySelector(".progress");
            if (progressValue) progressValue.textContent = Math.round(scrollPercentage) + "%";
            if (progressScroll) progressScroll.style.background = `conic-gradient(#8CEFE9 ${scrollPercentage}%, #070E21 ${scrollPercentage}%)`;
        }
        window.addEventListener("scroll", scrollListener);

        // clean up function
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, []);

    return (
        <div className="icons-left">
            <div className="icons-container">
                <Link target="blank_" to="https://discord.gg/bYF6M2K8H4">
                    <span className="discord-icon" onClick={returnToHome}>
                        <img src={Discord} />
                    </span>
                </Link>
                {isVisible &&
                    <div className="progress">
                        <span className="progress-value" onClick={returnToHome}>0%</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default FloatButtons;