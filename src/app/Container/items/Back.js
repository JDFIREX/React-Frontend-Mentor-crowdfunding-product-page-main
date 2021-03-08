import React from "react"
import data from "./../../Data/Data"
import BackHeader from "./Back/BackHeader"
import BackSection from "./Back/BackSection"
import "./Back.css"


const Back = ({setBack, back}) => {

    // console.log("render Back")
    // console.log(data)


    return(
        <>
        <div className="back_bg"></div>
        <div className="back" >
            <BackHeader data={data[0]} setBack={setBack} back={back} />
            <BackSection data={data[4]} />
            <BackSection data={data[1]} />
            <BackSection data={data[2]} />
            <BackSection data={data[3]} />
        </div>
        </>
    )

}

export default Back