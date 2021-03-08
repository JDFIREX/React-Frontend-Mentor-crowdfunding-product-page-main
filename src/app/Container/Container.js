import React , { useState } from "react"
import "./Container.css"

import Mastercraft from "./items/Mastercraft"
import Back from "./items/Back"
import Backers from "./items/Backers"
import Project from "./items/Project"
import data from "./../Data/Data"

const Container = () => {

    const [back, setBack] = useState(false);

    // console.log("render container")
    console.log(data,"tu patrz")

    return(
        <div className="Container">
            <Mastercraft setBack={setBack} back={back} />
            {back && <Back setBack={setBack} back={back} />}
            <Backers />
            <Project  setBack={setBack} back={back}/>
        </div>
    )
}

export default Container