import React, { Fragment, useEffect, useState } from 'react';
import './dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import navBar from './navbar';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import NavBar from './navbar';
import ProfileCard from './profileCard';
const url = 'http://localhost:5000/'

const Dashboard = () => {
    return (
        <>
        <NavBar/>
        <div className='Dashboard-contents'>
            <div className='container'>
            </div>
        </div>
        </>
    );
}
export default Dashboard