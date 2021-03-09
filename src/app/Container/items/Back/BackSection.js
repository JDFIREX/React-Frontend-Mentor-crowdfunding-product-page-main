import React , { useState, useRef } from "react"
import "./BackSection.css"

const BackSection  = ({data, HandleClick, pressed}) => {


    const [pledge, setPledge] = useState(0)

    console.log(pledge)

    const ringClick = (e) => {

        let waitForChange = new Promise(resolve => {
            HandleClick(e)
            resolve(HandleClick)
        })
        // if(!pressed){
        //     waitForChange.then(r => {
        //         pledgeRef.current.focus();
        //     })
        // }
    }

    const confirmPledge = (e) => {
        

        if(Number(pledge) >= data.minPledge){
            HandleClick(e)
            console.log('zamkniete')
        }else{
            alert(`min pledge : ${data.minPledge}`)
        }
        
    }


    const Stock = () => {
        return(
            <div className={pressed ? "back__item__select" : "back__item"}>

                <div className="item__info">

                    <div className="item__select__ring">
                        <button className="select_ring" onClick={ringClick} onKeyDown={(e) => e.key === "Enter" && ringClick} data-id={data.id}>
                            {pressed && (
                                <div className="ring_inner"></div>
                            )}
                        </button>
                    </div>

                    <div className="item__main">

                        <div className="item__header">

                            <div className="header__info">
                                <h1 onClick={HandleClick} data-id={data.id}>{data.Header}</h1>
                                <p>{data.pledge}</p>
                            </div>
                            {data.left !== "free" ? (
                                <div className="header__left" >
                                    <h1>{data.left}</h1> 
                                    <p>left</p>
                                </div>
                            ) : null}
                        </div>

                        <div className="item__p">
                            <p>{data.p}</p>
                        </div>

                    </div>


                </div>


                {pressed && (
                    <div className="item__select">
                        <p>{data.chooseP}</p>
                        <div className="select__btns">
                            <div className="select__pledge">
                                <label htmlFor="pledge" >$</label>
                                <input type="text" name="pledge" value={pledge} onChange={(e) => setPledge(e.target.value)} className="select__pledge" /> 
                            </div>
                            <button data-id={data.id} onClick={confirmPledge} >{data.chooseBtn}</button>
                        </div>
                    </div>
                )}

            </div>
        )
    }

    const OutOfStock = () => {
        return(
            <div className="back__item__out">

                <div className="item__info">

                    <div className="item__select__ring">
                        <div className="select_ring">
                        </div>
                    </div>

                    <div className="item__main">

                        <div className="item__header">

                            <div className="header__info">
                                <h1>{data.Header}</h1>
                                <p>{data.pledge}</p>
                            </div>
                            {data.left !== "free" ? (
                                <div className="header__left" >
                                    <h1>{data.left}</h1> 
                                    <p>left</p>
                                </div>
                            ) : null}
                        </div>

                        <div className="item__p">
                            <p>{data.p}</p>
                        </div>

                    </div>


                </div>
            </div>
        )
    }

    return(
        <>
            {data.left === 0 ? <OutOfStock /> : <Stock />}
        </>
    )
}

export default React.memo(BackSection);