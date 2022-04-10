import React, { Fragment, useEffect, useState } from 'react';
import './viewCart.css';
import './dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import NavBar from './navbar';
import axios from 'axios';
import ProductCard from '../vendorDashboard/productCard.jsx'
import { Link,useNavigate } from 'react-router-dom';
const url = 'http://localhost:5000/'
const ViewCart = () => {
    return(
        <>
        <h1>Hello</h1>
        </>

    );

}
export default ViewCart