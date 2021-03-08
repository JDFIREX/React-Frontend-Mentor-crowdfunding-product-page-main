import React from "react"
import ProjectSection from "./sections/ProjectSection"
import ProjectHeader from "./sections/ProjectHeader"
import "./Project.css"
import data from "./../../Data/Data"

const Project = ({setBack, back}) => {

    return(
        <div className="project">
            <ProjectHeader data={data[0]} />
            <ProjectSection data={data[1]} setBack={setBack} back={back}/>
            <ProjectSection data={data[2]} setBack={setBack} back={back}/>
            <ProjectSection data={data[3]} setBack={setBack} back={back}/>
        </div>
    )
}


export default Project;