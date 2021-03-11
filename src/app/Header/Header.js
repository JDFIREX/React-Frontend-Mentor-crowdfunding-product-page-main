import React, {useEffect, useState} from "react"
import LogoSVG from "./../../images/logo.svg"
import "./Header.css"
import hamb from "./../../images/icon-hamburger.svg"
import close from "./../../images/icon-close-menu.svg"


// Logo
const Logo = () => {
    return(
        <div className="logo">
            <img src={LogoSVG} className="logo__icon" alt="crowdfund logo" />
        </div>
    )

}

// Mobile Nav 

const MobileNav = React.memo(({setOpen, open}) => {

    return (
        <div className="nav">
            <img src={open ? close : hamb } alt="hamb" onClick={() => setOpen(!open)} />
            {open && (
                <div className="nav__mobile">
                    <p className="nav__item">About</p>
                    <p className="nav__item">Discover</p>
                    <p className="nav__item">Get Started</p>
                </div>
            )}
        </div>
    )
})


// Nav

const Nav = ({setOpen, open}) => {

    const [NavMobile, setNav] = useState(false)

    const resizeWindow = () => {
        if(window.innerWidth <= 500){
            setNav(true)
        }else{
            setNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("load", resizeWindow)
        window.addEventListener('resize', resizeWindow)
    },[])


    return(
        <>
        {NavMobile === false ? (
            <div className="nav">
                <p className="nav__item">About</p>
                <p className="nav__item">Discover</p>
                <p className="nav__item">Get Started</p>
            </div>
        ) : (
            <div className="nav">
                <MobileNav setOpen={setOpen} open={open} />
            </div>
        )}
        </>
    )
}

// header
const Header = () => {

    const [open, setOpen] = useState(false)

    return(
        <div className="header">
            <div className={open ? "header__box open" : "header__box"}>
                <Logo />    
                <Nav setOpen={setOpen} open={open} />
            </div>
        </div>
    )
}

export default Header