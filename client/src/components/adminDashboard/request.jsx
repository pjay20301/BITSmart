import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import RequestCard from './requestCard';
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
            <Fragment>
                {/* <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div> */}
                {/* <SideBar /> */}
                <h2 className='homeHeading'>Pending Requests</h2>

                <div className='container' id='container'>
                    <h1>Requests</h1>
                    {requests &&
                        requests.map((vendor) => (
                            <RequestCard key={vendor._id} request={vendor} />
                        ))}
                </div>
            </Fragment>
        </>
    )
};

export default Request