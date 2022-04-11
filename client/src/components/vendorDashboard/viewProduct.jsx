import React, { Fragment, useEffect } from 'react'
import './viewProduct.css'
import ProductCard from './productCard.jsx'
import axios from 'axios'
import { useState } from 'react'
import SideBar from './sidebar'

const url = 'http://localhost:5000/'

const ViewProduct = () => {
    
    const [products, setProduct] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'api/all')
            setProduct(response.data)
        }
        fetchData()
    }) 
    return (
        <Fragment>
            {/* <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div> */}
            <SideBar />
            <h2 className='homeHeading'>Featured Products</h2>

            <div className='container' id='container'>
                {products.data &&
                    products.data.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
            </div>
        </Fragment>
    )
}

export default ViewProduct
