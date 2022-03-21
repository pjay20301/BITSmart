import React, { Fragment, useEffect, useState } from 'react';
import './profileCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import navBar from './navbar';
import axios from 'axios';
const url = 'http://localhost:5000/api/'
const ProfileCard =()=>{

    const {useState} = React;
    const [usenumber,setusenumber] = useState(1);
    
    const [fullimage,setfullimage]=useState(true);
    
    
    const [isActive,setisActive] = useState(false);
    
    const [heart,setheart]=useState(true);
    
    const ImageClick = () =>{
    
    if(isActive){
    
    setisActive(false);
    }else{
    setisActive(true);
    }
    
    
    }
    const FullImage=()=>{
    if(fullimage){
    setfullimage(false);
    }
    else{
    setfullimage(true);
    }
    }
    
    const AddUser=()=>{
    setusenumber(usenumber+1);
    }
    
    const Heart=()=>{
    if(heart){
    setheart(false);
    }
    else{
    setheart(true);
    }
    }
    
    return(
    <>
        <div className="card-container">
            <div className={`card ${isActive ? "black" : "" }`}>
                <div className={`top_part ${isActive ? "font_icons" : "" }`}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className={`overlay ${fullimage ? "d-none" : "" }`}>
                    <small onClick={FullImage} className="fa fa-close"></small>
                    <img src="https://www.kindpng.com/picc/m/33-338711_circle-user-icon-blue-hd-png-download.png" />
                </div>
                <div className="circle">
                    <span onClick={FullImage}><img src="https://www.kindpng.com/picc/m/33-338711_circle-user-icon-blue-hd-png-download.png" /></span>
                    <h5>Name</h5>
                </div>
                <div className='card-contents'>
                    <p>Email: xxxxx@xxxx.com</p>
                    <p>Phone No: xxxxxxxxx</p>
                    <p>Address: xxxxxxxxx</p>
                </div>
                <hr>
                </hr>
                <div className="button">
                    <button onClick={AddUser}>Edit Profile</button>
                </div>
            </div>
    
        </div>
    
    </>
    );
    }
export default ProfileCard;