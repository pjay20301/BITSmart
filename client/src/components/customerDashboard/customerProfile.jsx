import React, { Fragment, useEffect, useState } from 'react';
import './dashboard.css';
import { useSelector, useDispatch,useParams } from 'react-redux';
import { useAlert } from 'react-alert';
import navBar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar';
import ProfileCard from './profileCard';
const url =  'http://localhost:5000/'

const CustomerProfile = () => {
    var em = JSON.parse(localStorage.getItem('cemail'));
    
    const [usr, setUsr] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(url + 'api/getUser/'+em)
            console.log(em)
            const response = await axios.get(url + `api/custprof/${resp.data._id}`)
            setUsr(response.data)
            //products = response.data
            console.log(response.data.name)
        }
        fetchData()
    })
    return (
        <>
        <NavBar/>
        <div className='Dashboard-contents'>
            <div className='container'>
                <ProfileCard key={usr._id}
                            usr={usr} ema={em}/>
            </div>
        </div>
        </>
    );
}
export default CustomerProfile;