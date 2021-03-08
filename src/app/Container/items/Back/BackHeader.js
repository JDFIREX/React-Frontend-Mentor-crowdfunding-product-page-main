import React from "react"
import "./BackHeader.css"
import close from "./../../../../images/icon-close-modal.svg"
import data from "./../../../Data/Data"


const BackHeader = ({data: sectionData, setBack, back}) => {

    const HandleClick = (e) => {
        e.preventDefault();
        setBack(!back)

        for(let i = 1; i < data.length; i++){
            data[i].pressed = false;
        }

    }


    return(
        <div className="back__header">
            <div className="close">
                <img src={close} alt="close" className="close_back" onClick={HandleClick} />
            </div>
            <div className="header__info">
                <h1>{sectionData.chooseH}</h1>
                <p>{sectionData.chooseP}</p>
            </div>
        </div>
    )
}


export default BackHeader;