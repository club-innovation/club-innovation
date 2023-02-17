import React from "react"
import "./List.css"

function List() {
  return (
    <>
    <div className="list">
        <div className="list-container">
            <div className="list-card">
                <p>?</p>
            </div>
            <div className="list-card">
                <p>?</p>
            </div>
            <div className="list-card">
                <p>?</p>
            </div>
            <div className="list-card">
                <p>?</p>
            </div>
        </div>
    </div>
    <div className="list-btn-container">
        <button className="list-btn">Load More</button>
    </div>
    </>
  )
}

export default List;