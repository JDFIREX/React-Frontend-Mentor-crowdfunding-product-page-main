import React from "react"
import "./ProjectHeader.css"

const ProjectHeader = ({ data }) => {

    console.log(data,"project Header render")

    return(
        <div className="section__header">
            <h1>{data.Header}</h1>
            <p>{data.p1}</p>
            <p>{data.p2}</p>
        </div>
    )
}


export default ProjectHeader