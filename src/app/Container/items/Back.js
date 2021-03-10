import React, { useState } from "react"
import data from "./../../Data/Data"
import BackHeader from "./Back/BackHeader"
import BackSection from "./Back/BackSection"
import "./Back.css"


const Back = ({setBack, money, setMoney, backers, setBackers, setThanks}) => {


    const [pressed, setPressed] = useState({
        "4" : data[4].pressed, 
        "1" : data[1].pressed, 
        "2" : data[2].pressed,
        "3" : data[3].pressed, 
    })

    

    const HandleClick = (e, backed = false, pledge = 0) => {

        let targetId = Number(e.target.dataset.id);
        
        setPressed({
            "4" : targetId === 4 ? !pressed["4"] : false,
            "1" : targetId === 1 ? !pressed["1"] : false,
            "2" : targetId === 2 ? !pressed["2"] : false,
            "3" : targetId === 3 ? !pressed["3"] : false,
        })

        if(backed){
            setMoney(money + pledge)
            setBackers(backers + 1)
            setBack(false)
            setThanks(true)
        }
        
    }


    return(
        <>
        <div className="back_bg"></div>
        <div className="back" >
            <BackHeader data={data[0]} setBack={setBack} />
            <BackSection data={data[4]} pressed={pressed["4"]} HandleClick={HandleClick} />
            <BackSection data={data[1]} pressed={pressed["1"]} HandleClick={HandleClick} />
            <BackSection data={data[2]} pressed={pressed["2"]} HandleClick={HandleClick} />
            <BackSection data={data[3]} pressed={pressed["3"]} HandleClick={HandleClick} />
        </div>
        </>
    )

}

export default React.memo(Back)