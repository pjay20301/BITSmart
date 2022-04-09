import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import RequestCard from './requestCard';
import { CgProfile } from "react-icons/cg";
import './request.css';
import NavBar from './navbar';
const url = 'http://localhost:5000/'
const Request = () => {

    const [requests, setRequest] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'api/getRequest')
            //console.log(response.data)
            setRequest(response.data)
        }
        fetchData()
    }) 
    return (
        <>
                {/* <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div> */}
            <div className='ad-container'>
                <NavBar />
                <div className='admin-box'>
                    <h3>Pending Vendor Requests</h3>
                    {requests &&
                        requests.map((vendor) => (
                            <RequestCard key={vendor._id} request={vendor} />
                        ))}
                </div>
                </div>

        </>
    )
};

export default Request