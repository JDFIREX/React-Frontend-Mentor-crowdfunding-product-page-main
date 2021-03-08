import React from "react"
import ProjectSection from "./sections/ProjectSection"
import ProjectHeader from "./sections/ProjectHeader"
import "./Project.css"

const data= [
    {
        Header : "About this project",
        p1 : `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.`,
        p2 : `Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.`,
        chooseH : "Back this project",
        chooseP : "Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"
    },
    {
        Header : "Bamboo Stand",
        pledge : "Pledge $25 or more",
        p : `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.` ,
        left : 101,
        btn : "Select Reward"
    },
    {
        Header : "Black Edition Stand",
        pledge : "Pledge $75 or more",
        p : `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.` ,
        left : 64,
        btn : "Select Reward",
        chooseP : "Enter your pledge",
        chooseBtn : "Continue"
    },
    {
        Header : "Mahogany Special Edition",
        pledge : "Pledge $200 or more",
        p : `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.` ,
        left : 0,
        btn : "Select Reward"
    },
]

const Project = () => {

    return(
        <div className="project">
            <ProjectHeader data={data[0]} />
            <ProjectSection data={data[1]} />
            <ProjectSection data={data[2]} />
            <ProjectSection data={data[3]} />
        </div>
    )
}


export default Project;