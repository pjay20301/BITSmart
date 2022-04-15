import React, { Fragment, useEffect, useState } from 'react'
import './indiVendor.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import axios from 'axios'
import { Link,useNavigate,useLocation,useParams } from 'react-router-dom'
import AbortController from "abort-controller"
import ProductCard from '../vendorDashboard/productCard'
const url = 'http://localhost:5000/'
const IndiVendor = () => {
   const {vid} = useParams();
    const [prod, setProd] = useState([])
    useEffect(() => {
        async function fetchData() {
            console.log(`api/all/${vid}`);
            const response = await axios.get(url + `api/all/${vid}`);
            setProd(response.data);
        }
        fetchData()
       // console.log(prod[0].name)
    });
    return(
    <Fragment>
    <div className='dispProd'>
                {prod.data &&
                    prod.data.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
            </div>
    </Fragment>
)
}

export default IndiVendor;