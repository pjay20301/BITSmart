import React, { Fragment, useEffect, useState } from 'react';
import './viewVendors.css';
import './dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import NavBar from './navbar';
import axios from 'axios';
import VCard from './vcard';
import ProductCard from '../vendorDashboard/productCard.jsx'
import { Link,useNavigate } from 'react-router-dom';
const url = 'http://localhost:5000/'

const ViewVendors = () => {
    const [vendors, setVendor] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'api/allvend')
            setVendor(response.data)
            //products = response.data
            console.log(vendors)
        }
        fetchData()
    }) 
    //console.log('products: ' + products)
    return (
        <>
        <NavBar/>
        <div className='Dashboard-contents'>
            <div className='container' id='container'>
                {vendors.data &&
                    vendors.data.map((vendor) => (
                        <VCard
                            key={vendor._id}
                            vendor={vendor}
                        />
                    ))}
            </div>
        </div>
        </>
    );
}
export default ViewVendors