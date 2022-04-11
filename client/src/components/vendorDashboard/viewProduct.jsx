import React, { Fragment, useEffect } from 'react'
import './viewProduct.css'
import ProductCard from './productCard.jsx'
import axios from 'axios'
import { useState } from 'react'
import SideBar from './sidebar'

const url = 'http://localhost:5000/'

const ViewProduct = () => {
    const em = JSON.parse(localStorage.getItem('vemail'));
    const [products, setProduct] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(url + 'api/getUser/'+em)
            const response = await axios.get(url + `api/all/${resp.data._id}`)
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
            <h2 className='homeHeading'>All Products</h2>

            <div className='dispProd'>
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
