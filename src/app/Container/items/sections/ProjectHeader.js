import React from "react"
import "./ProjectHeader.css"

const ProjectHeader = React.memo(({ data }) => {

    return(
        <div className="section__header">
            <h1>{data.Header}</h1>
            <p>{data.p1}</p>
            <p>{data.p2}</p>
        </div>
    )
})


export default ProjectHeader