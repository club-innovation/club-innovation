import React from "react"
import "./style/Loading.css"

function Loading() {
  return (
    <div className="Loading-container">
        <div className="Loading">
            <h1>
                &#123;Club <span>Innovation</span>&#125;
            </h1>
            <div className="loading-effect"></div>
        </div>
    </div>
  )
}

export default Loading;