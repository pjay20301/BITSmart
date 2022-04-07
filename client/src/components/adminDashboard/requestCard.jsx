import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
            <div>
                <p>{request.shopName}</p>
            </div>
            <div>
                <div className='form-group form-button'>
                    <input
                        type='submit'
                        name='accept'
                        id='signin'
                        className='form-submit'
                        value='Accept'
                        onClick={handleAccept}
                    />
                    <div className='form-group form-button'>
                        <input
                            type='submit'
                            name='reject'
                            id='signin'
                            className='form-submit'
                            value='Reject'
                            onClick={handleReject}
                        />
                    </div>
                </div>
            </div>
            {/* <span>{`₹${product.price}`}</span>
            <span>{`${product.description}`}</span> */}
        </>
    )
}

export default RequestCard
