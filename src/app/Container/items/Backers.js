import React , { useState } from "react"
import "./Backers.css"

const Backers = React.memo(({money,backers}) => {

    const [hover, setHover] = useState(false);

    let newMoney;
    let l = money.toString().split("").length;
    let m = l / 3 > Math.floor(l / 3) ? Math.floor(l / 3) : Math.floor(l / 3) - 1;
    let n = money.toString().split("").reverse()
    for(let i = 1; i <= m; i++){
        n.splice((i * 3) -1 + i, 0, ",");
    } 
    newMoney = n.reverse().join("")

    return(
        <div className="Backers">
            <div className="Back__stats">
                <div className="stats__item">
                    <h1>${money > 100000 ? " > 100,000" : newMoney}</h1>
                    <p>of $100,000 backed</p>
                </div>
                <div className="stats__item">
                    <h1>{backers}</h1>
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
                    value={money} 
                    alt={money} 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                />
                {hover && <ProgressValue money={money} />}
            </div>
        </div>
    )
})


const ProgressValue = ({money}) => {
    return(
        <div className="progress_value">
            <p className="progress__p">{money}</p>
        </div>
    )
}


export default Backers