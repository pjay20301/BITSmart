import React, { Fragment, useEffect, useState } from 'react'
import './indiVendor.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import axios from 'axios'
import { Link,useNavigate,useLocation,useParams } from 'react-router-dom'
import AbortController from "abort-controller"
const url = 'http://localhost:5000/'
const IndiVendor = ({match}) => {
    const {vid} = useParams();
    return(
    <Fragment>
        <Link to='/viewVendors'>
        <button className='b1'> Back to All Vendors</button>
        </Link>
        <div>
            <h1>Hello {vid}</h1>
        </div>
    </Fragment>
)
}

export default IndiVendor;