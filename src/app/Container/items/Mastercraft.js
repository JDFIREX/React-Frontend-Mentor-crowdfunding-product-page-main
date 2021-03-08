import React , { useState }from "react"
import MastercraftLogo from "./../../../images/logo-mastercraft.svg"
import BookmarkLogo from "./../../../images/icon-bookmark.svg"
import BookmarkedLogo from "./../../../images/icon-bookmarked.svg"
import BookmarkHover from "./../../../images/icon-bookmark-hover.svg"
import "./Mastercraft.css"

const Mastercraft = React.memo(({ setBack, back}) => {

    const [logo, setLogo] = useState(BookmarkLogo)
    const [book, setBook] = useState(false)
    
    // console.log("render mastercraft")

    return(
        <div className="mastercraft" >
            <img src={MastercraftLogo} alt="mastercraft logo" className="mastercraft__logo" />
            <div className="mastercraft__header">
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </div>
            <div className="mastercraft__back">
                <button className="back__btn" type="submit" onClick={() => setBack(!back)} >Back this project</button>
                <div className="back_slider" onMouseEnter={() => setLogo(BookmarkHover)} onMouseLeave={() => setLogo(BookmarkLogo)} onClick={() => setBook(!book)}>
                    <img src={book ? BookmarkedLogo : logo } alt="slider img" className="slider__img" />
                    <p className={book ? "slider__p_book" : "slider__p"}>{book ? "Bookmarked" : "Bookmark"}</p>
                </div>
            </div>
        </div>
    )

})

export default Mastercraft