import React, { Fragment, useEffect, useState } from 'react'
import './dash.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import SideBar from './sidebar'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
const url = 'https://bits-smart.herokuapp.com/' || 'http://localhost:5000/api/'
const Dash = () => {
    const [vend, setVend] = useState([])
    //let products = [];
    const userd = JSON.parse(localStorage.getItem('user'));
    console.log(userd);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'api/viewProfile',userd)
            setVend(response.data)
        }
        fetchData()
    })
    console.log(vend.name)
    return(
    <Fragment>
        <div className='dashboard'>
            <SideBar />
            <h2>Welcome, {userd} </h2>
            <div className='s-container'>
            <h3>My Profile</h3>
            </div>
        </div>
    </Fragment>
)
}

export default Dash;


