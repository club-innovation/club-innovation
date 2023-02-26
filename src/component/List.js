import React, {useState} from "react"
import "./List.css"

import { Link } from "react-router-dom";

function List({data, page}) {
    const [loadMore, setLoadMore] = useState(false);
    const [len, setLen] = useState(4);

    function LoadMore()
    {
        setLoadMore(!loadMore);
        setLen(loadMore ? 4 : data.length);
    }

  return (
    <div className="list-parent">
        <div className="list">
            <div className="list-container">
                {data.slice(0).reverse().slice(0,len).map((element,index)=>{
                    const elementLink = "/"+page+"/"+(len-1-index);
                    return(
                    <Link to={elementLink} key={index}>
                        <div className="list-card" style={{backgroundImage: `url(${element.image})`}}>
                            <div className="list-card-info">
                                <p className="list-card-info-title">{element.title}</p>
                            </div>
                        </div>
                    </Link>)
                })}
            </div>
        </div>
        <div className="list-btn-container">
            <button className="list-btn" onClick={LoadMore}>{loadMore ? 'Load Less' : 'Load More'}</button>
        </div>
    </div>
  )
}

export default List;