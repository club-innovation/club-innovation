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
                    const elementLink = "/" + page + "/" + (data.length -1-index);
                    return(
                    <Link to={elementLink} key={index}>
                            <div className="list-card" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .9)),url(${element.images[0].url})`}}>
                            <div className="list-card-info">
                                <p className="list-card-info-title">{element.title}</p>
                                <p className="list-card-info-date">{element.date}</p>
                            </div>
                        </div>
                    </Link>)
                })}
            </div>
        </div>
        {data.length < 5 ? 
        <></> 
        : 
        <div className="list-btn-container">
            <button className="list-btn" onClick={LoadMore}>{loadMore ? 'Load Less' : 'Load More'}</button>
        </div>
        }
    </div>
  )
}

export default List;