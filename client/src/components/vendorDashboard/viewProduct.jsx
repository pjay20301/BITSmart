import React, { Fragment, useEffect } from 'react'
import './viewProduct.css'
import ProductCard from './productCard.jsx'
import axios from 'axios'
import { useState } from 'react'
import SideBar from './sidebar'

const url = 'http://localhost:5000/api/'

const ViewProduct = () => {
    const [products, setProduct] = useState([])
    //let products = [];
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url + 'all')
            setProduct(response.data)
            //products = response.data
            console.log(products)
        }
        fetchData()
    }) 
    console.log('products: ' + products)
    //const products = await axios.get(url + '/all');
    return (
        <Fragment>
            {/* <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div> */}
            <SideBar />
            <h2 className='homeHeading'>Featured Products</h2>

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
        </Fragment>
    )
}

export default ViewProduct
