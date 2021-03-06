import React from "react"
import "./BackHeader.css"
import close from "./../../../../images/icon-close-modal.svg"
import data from "./../../../Data/Data"


const BackHeader = ({data: sectionData, setBack}) => {

    const HandleClick = (e) => {
        e.preventDefault();
        setBack(false)

        for(let i = 1; i < data.length; i++){
            data[i].pressed = false;
        }

    }


    return(
        <div className="back__header">
            <div className="close">
               <button><img src={close} alt="close" className="close_back" onClick={HandleClick} /></button>
            </div>
            <div className="header__info">
                <h1>{sectionData.chooseH}</h1>
                <p>{sectionData.chooseP}</p>
            </div>
        </div>
    )
}


export default BackHeader;