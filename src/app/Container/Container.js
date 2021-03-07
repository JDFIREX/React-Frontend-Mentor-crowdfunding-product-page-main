import React , { useState } from "react"
import "./Container.css"

import Mastercraft from "./items/Mastercraft"
import Back from "./items/Back"

const Container = () => {

    const [back, setBack] = useState(false);

    console.log("render container")

    return(
        <div className="Container">
            <Mastercraft setBack={setBack} back={back} />
            {back && <Back />}
        </div>
    )
}

export default Container