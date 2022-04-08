import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './requestCard.css'

const url = 'http://localhost:5000/'
const RequestCard = ({ request }) => {

    const handleAccept = async (e) => {
        e.preventDefault();
        //console.log("request: " + request._id)
        await axios.put(url + 'api/acceptVendor/' + request._id, request);
    }
    const handleReject = async (e) => {
        e.preventDefault();
        await axios.put(url + 'api/rejectVendor/' + request._id, request);
    }
    return (
        <>
            {/* <img src={product.image.url} alt={product.name} /> */}
            <div className='admin-card'>
                <p><b>Shop Name:</b> {request.shopName}</p>
                <p><b>Name:</b> {request.name}</p>
                <p><b>Address:</b> {request.address}</p>
                <p><b>Phone:</b> {request.phone}</p>
                    <input
                        type='submit'
                        name='accept'
                        id='signin'
                        className='form-submita'
                        value='Accept'
                        onClick={handleAccept}
                    />
                        <input
                            type='submit'
                            name='reject'
                            id='signin'
                            className='form-submitb'
                            value='Reject'
                            onClick={handleReject}
                        />
                </div>
            {/* <span>{`₹${product.price}`}</span>
            <span>{`${product.description}`}</span> */}
        </>
    )
}

export default RequestCard
