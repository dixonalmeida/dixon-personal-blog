import React from "react"

import "./header.css"
import dj from "../../images/dj.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <img src={dj}  className="ml-4 mt-2" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <br/>
            <h5 className="mr-1 mt-1">{props.author}</h5>
        </div>
         
    )
}

export default MobileBio