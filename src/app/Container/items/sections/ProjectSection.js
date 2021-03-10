import React from "react"
import "./ProjectSection.css"

const ProjectSection = ({ data, setBack }) => {

    const HandleClick = (e) => {
        setBack(true);
        data.pressed = true;
    }

    return(
        <>
            {data.left === 0 ? <OutOfStock data={data} /> : <Stock data={data} HandleClick={HandleClick} />}
        </>
    )
}


const Stock = React.memo(({HandleClick, data}) => {
    return(
        <div className="section__item" >
            <div className="item__header">
                <h1>{data.Header}</h1>
                <p>{data.pledge}</p>
            </div>
            <div className="item__p">
                <p>{data.p}</p>
            </div>
            <div className="item__select">
                <div className="select__left" >
                    <h1>{data.left}</h1> 
                    <p>left</p>
                </div>
                <button onClick={HandleClick}>{data.btn}</button>
            </div>
        </div>
    )
})

const OutOfStock = React.memo(({data}) => {
    return(
        <div className="section__item__out">
            <div className="item__header">
                <h1>{data.Header}</h1>
                <p>{data.pledge}</p>
            </div>
            <div className="item__p">
                <p>{data.p}</p>
            </div>
            <div className="item__select">
                <div className="select__left" >
                    <h1>{data.left}</h1> 
                    <p>left</p>
                </div>
                <button>{data.Out}</button>
            </div>
        </div>
    )
})

export default ProjectSection