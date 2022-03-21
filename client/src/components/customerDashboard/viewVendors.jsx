import React, { Fragment, useEffect, useState } from 'react';
import './viewVendors.css';
import './dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import NavBar from './navbar';
import axios from 'axios';
import ProductCard from '../vendorDashboard/productCard.jsx'
import { Link,useNavigate } from 'react-router-dom';
const url = 'https://bits-smart.herokuapp.com/' || 'http://localhost:5000/api/'

const ViewVendors = () => {
    const [products, setProduct] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'api/all')
            setProduct(response.data)
            //products = response.data
            console.log(products)
        }
        fetchData()
    }) 
    console.log('products: ' + products)
    return (
        <>
        <NavBar/>
        <div className='Dashboard-contents'>
            <div className='container' id='container'>
                <h1>Products</h1>
                {products.data &&
                    products.data.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
        </>
    );
}
export default ViewVendors