import React from "react";
import Desgin from "./../design/desktop-design.jpg"
import "./index.css"
import Header from "./Header/Header"
import Container from "./Container/Container"

const Design = () => {
    return(
        <>
            <img src={Desgin} alt="Design"  className="Design"/>
        </>
    )
}


export default function Main () {
    return (
        <React.Suspense fallback={<div>Loading....</div>}>
            <Design />
            <Header />
            <Container />
        </React.Suspense>
    )
}