import React , { useState } from "react"
import "./BackSection.css"


const BackSection  = React.memo(({data}) => {


    const [pledge, setPledge] = useState(0)

    const Stock = () => {
        return(
            <div className="back__item">

                <div className="item__select">
                    <div className="select_ring">
                        <div className="ring_inner"></div>
                    </div>
                </div>

                <div className="item__header">

                    <div className="header__info">
                        <h1>{data.Header}</h1>
                        <p>{data.pledge}</p>
                    </div>
                    {data.left != "free" ? (
                        <div className="header__left" >
                            <h1>{data.left}</h1> 
                            <p>left</p>
                        </div>
                    ) : null}
                </div>

                <div className="item__p">
                    <p>{data.p}</p>
                </div>

                {data.pressed && (
                    <div className="item__select">
                        <p>{data.chooseP}</p>
                        <input type="number" value={pledge} onChange={() => setPledge((e) => e.target.value)} className="select__pledge" /> 
                        <button>{data.chooseBtn}</button>
                    </div>
                )}

            </div>
        )
    }

    const OutOfStock = () => {
        return(
            <div className="back__item">

                <div className="item__select">
                    <div className="select_ring">
                        <div className="ring_inner"></div>
                    </div>
                </div>

                <div className="item__header">

                    <div className="header__info">
                        <h1>{data.Header}</h1>
                        <p>{data.pledge}</p>
                    </div>
                    <div className="header__left" >
                        <h1>{data.left}</h1> 
                        <p>left</p>
                    </div>

                </div>

                <div className="item__p">
                    <p>{data.p}</p>
                </div>

            </div>
        )
    }

    return(
        <>
            {data.left == 0 ? <OutOfStock /> : <Stock />}
        </>
    )
})

export default BackSection;