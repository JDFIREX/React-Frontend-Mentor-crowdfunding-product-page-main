import React , { useState } from "react"
import "./Backers.css"

const Backers = () => {

    const [hover, setHover] = useState(false);

    return(
        <div className="Backers">
            <div className="Back__stats">
                <div className="stats__item">
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </div>
                <div className="stats__item">
                    <h1>5,007</h1>
                    <p>total backers</p>
                </div>
                <div className="stats__item">
                    <h1>56</h1>
                    <p>days left</p>
                </div>
            </div>
            <div className="Back__range">
                <progress 
                    className="progres"  
                    max="100000" 
                    value="89914" 
                    alt="89914" 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
                {hover && <ProgressValue />}
            </div>
        </div>
    )
}


const ProgressValue = () => {
    return(
        <div className="progress_value">
            <p className="progress__p">89914</p>
        </div>
    )
}


export default Backers