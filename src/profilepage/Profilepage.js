import "./Profilepage.css";
import React, { useContext, useState } from "react";
import back from "../images/back.png";
import profilepho from "../images/profilepho.png";
import text from "../images/text.png";
import edit from "../images/edit.png";
import password from "../images/password.png";
import music from "../images/music.png";
import { Link, useNavigate, useRoutes } from "react-router-dom";

function ProfilePage() {
    return(
        <div className="wholeContent">
            <div className="firstEle">
                <img className='back' src={back}/>
                <p className="profileTitle">Profile</p>
            </div>
            <img className='profilepho' src={profilepho}/>
                <p className="info">Mike van Tienoven</p>
                <p className="info s">Holo's watched: 5</p>
                <div className="boxy">
                <img className='text' src={text}/>
                <div className="emailInfo">
                    <p className="email">E-mail</p>
                    <p className="emaill">mike.tienoven@gmail.com</p>
                </div>
                <img className='edit' src={edit}/>
                </div>
                <div className="boxy">
                <img className='password' src={password}/>
                <div className="emailInfo">
                    <p className="email">Password</p>
                    <p className="emaill">********</p>
                </div>
                <img className='edit s' src={edit}/>
                </div>
                <div className="boxy">
                <img className='music' src={music}/>
                <div className="emailInfo">
                    <p className="email">Favourite music genre</p>
                    <p className="emaill">K-pop</p>
                </div>
                <img className='edit t' src={edit}/>
                </div>
                <button className="logout">Log out</button>
        </div>
    )

    
}
export default ProfilePage;