import React, {useEffect, useRef} from "react"
import "./Thanks.css"
import completedLogo from "./../../../images/icon-check.svg"

const Thanks = ({setThanks}) => {

    const ThanksRef = useRef(0)

    useEffect(() => {
        ThanksRef.current.focus()
    },[])

    return(
        <>
            <div className="Thanks_bg"></div>
            <div className="Thanks" >
                <div className="completed">
                    <img src={completedLogo} alt="completed" className="completed__logo" />
                </div>
                <div className="Thanks__header">
                    <h1>Thanks for your sopport!</h1>
                    <p>Your pledge brings us one step close to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our compaign is completed.</p>
                </div>
                <div className="completed__btn">
                    <button onClick={() => setThanks(false)} ref={ThanksRef}>Got it!</button>
                </div>
            </div>
        </>
    )
}

export default Thanks