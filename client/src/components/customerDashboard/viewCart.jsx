import React, { Fragment, useEffect, useState } from 'react';

import './dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import NavBar from './navbar';
import axios from 'axios';
import CartCard from './cartCard.jsx'
import { Link,useNavigate } from 'react-router-dom';
const url = 'http://localhost:5000/'
const ViewCart = () => {
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
    return(
        <>
        <NavBar/>
        <div className='Dashboard-contents'>
            <div className='container' id='container'>
            <h2> My Cart</h2>
            <div className='order'>
                <p>
            <b>Total: </b>
            <input
            type='phone'
            name='phone'
            id='phone'
            placeholder='Phone'
                />
                </p>
                <button>Place Order</button>
                </div>
                {products.data &&
                    products.data.map((product) => (
                        <CartCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                    </div>
            </div>
        </>

    );

}
export default ViewCart