import React, {useEffect} from "react"
import "./Thanks.css"
import completedLogo from "./../../../images/icon-check.svg"

const Thanks = ({setThanks}) => {

    useEffect(() => {
        window.scrollTo(0,300)
    },[])

    return(
        <>
            <div className="Thanks_bg"></div>
            <div className="Thanks" >
                <div className="completed">
                    <img src={completedLogo} alt="completed" className="completed__logo" />
                </div>
                <div className="Thanks__header">
                    <h1>Thanks for your support!</h1>
                    <p>Your pledge brings us one step close to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our compaign is completed.</p>
                </div>
                <div className="completed__btn">
                    <button onClick={() => setThanks(false)} >Got it!</button>
                </div>
            </div>
        </>
    )
}

export default Thanks