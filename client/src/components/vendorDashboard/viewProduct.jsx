import React, { Fragment, useEffect } from 'react'
//import { CgMouse } from 'react-icons/all'
import './viewProduct.css'
import ProductCard from './productCard.jsx'
import { useSelector} from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

const url = 'http://localhost:5000/api';

const ViewProduct = () => {
    
    const [products, setProduct] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = axios.get(url + '/view')
            setProduct(response.data)
        }
        fetchData()
    }, []) 
    
    return (
        <Fragment>
            {/* <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div> */}

            <h2 className='homeHeading'>Featured Products</h2>

            <div className='container' id='container'>
                {products &&
                    products.map((product) => (
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
