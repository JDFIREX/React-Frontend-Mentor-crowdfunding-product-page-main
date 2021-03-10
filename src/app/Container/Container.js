import React , { useState,useEffect } from "react"
import "./Container.css"

import Mastercraft from "./items/Mastercraft"
import Back from "./items/Back"
import Backers from "./items/Backers"
import Project from "./items/Project"
import Thanks from "./items/Thanks"
import data from "./../Data/Data"

const Container = () => {

    const [back, setBack] = useState(false);
    const [money, setMoney] = useState(89_914);
    const [backers, setBackers] = useState(5_007);
    const [thanks, setThanks] = useState(false)
    

    useEffect(() => {
        for(let i = 1 ; i < data.length ; i++){
            data[i].pressed = false;
        }
    },[thanks])

    return(
        <div className="Container">
            <Mastercraft setBack={setBack} />
            {back && <Back setBack={setBack} back={back} setMoney={setMoney} money={money} backers={backers} setBackers={setBackers} thanks={thanks} setThanks={setThanks} />}
            {(!back && thanks) && <Thanks setThanks={setThanks} />}
            <Backers money={money} backers={backers} />
            <Project  setBack={setBack} back={back}/>
        </div>
    )
}

export default Container