import React from "react"
import LogoSVG from "./../../images/logo.svg"
import "./Header.css"

// Logo
const Logo = () => {

    return(
        <div className="logo">
            <img src={LogoSVG} className="logo__icon" alt="crowdfund logo" />
        </div>
    )

}

// Nav

const Nav = () => {
    return(
        <div className="nav">
            <p className="nav__item">About</p>
            <p className="nav__item">Discover</p>
            <p className="nav__item">Get Started</p>
        </div>
    )
}

// header
const Header = () => {
    return(
        <div className="header">
            <div className="header__box">
                <Logo />    
                <Nav />
            </div>
        </div>
    )
}

export default Header