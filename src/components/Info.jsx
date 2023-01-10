import React from "react";
import {FaTwitter, FaGithub} from "react-icons/fa";
import profileImg from "/khalil.svg"
function Info(){
    return (
        <info className="info-class">
             <img src={profileImg} alt="khalil image" className="image-khalil" />
            <h1 className="name-khalil">Ibraheem Adeshola</h1>
            <p className="title-khalil"> Blockchain Developer</p>
            <button className="email-btn"><FaGithub />GitHub</button>
            <button className="twitter-btn"><FaTwitter />Twitter</button>
        </info>
    )
}

export default Info