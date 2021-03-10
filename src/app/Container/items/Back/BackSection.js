import React , { useState, useRef, useEffect } from "react"
import "./BackSection.css"

const BackSection  = React.memo(({data, HandleClick, pressed}) => {

    return(
        <>
            {data.left === 0 ? <OutOfStock data={data}  /> : <Stock data={data} pressed={pressed} HandleClick={HandleClick} />}
        </>
    )
})

const Stock = React.memo(({data, pressed,HandleClick}) => {

    const ringClick = (e, backed = false, pledge = 0) => {
        if(backed){
            HandleClick(e,backed,pledge)
            data.left -= 1;
            
        }else {
            HandleClick(e)
        }
    }


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
                        {data.id !== 4  ? (
                            <div className="header__left" >
                                <h1>{data.left}</h1> 
                                <p>left</p>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    <div className="item__p">
                        <p>{data.p}</p>
                    </div>

                </div>


            </div>


            {pressed && (
                <InputSelect min={data.minPledge} id={data.id} ringClick={ringClick} />
            )}

        </div>
    )
})



const OutOfStock = React.memo(({data}) => {
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
})


const InputSelect = React.memo(({min,id,ringClick}) => {

    const pledgeRef = useRef(null)

    useEffect(() => {
        pledgeRef.current.focus()
    },[])

    const [pledge, setPledge] = useState(0)

    const confirmPledge = (e) => {
        
        if(Number(pledge) >= min){
            ringClick(e, true, pledge);
            setPledge(0)
        }else{
            alert(`min pledge : ${min}`)
        }
        
    }

    return(
        <>
            <div className="item__select">
                <p>Enter your pledge</p>
                <div className="select__btns">
                    <div className="select__pledge">
                        <label htmlFor="pledge" >$</label>
                        <input type="number" name="pledge" value={pledge} ref={pledgeRef} onChange={(e) => setPledge(Number(e.target.value))} className="select__pledge" /> 
                    </div>
                    <button data-id={id} onClick={confirmPledge} >Continue</button>
                </div>
            </div>
        </>
    )
})



export default BackSection;