import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './topbar.css'
import logo from './logo.jpeg'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import PhoneIcon from '@material-ui/icons/Phone'

const topBar = () => {
    return (
        <div className='topbar'>
            <Link to='/signIn'>
                <img src={logo} alt='Ecommerce' />
            </Link>
            <Link to='/'>
                <p>
                    <HomeIcon />
                    Home
                </p>
            </Link>
            <Link to='/'>
                <p>
                    <InfoIcon />
                    About
                </p>
            </Link>
            <Link to='/'>
                <p>
                    <PhoneIcon />
                    Contact Us
                </p>
            </Link>
            <Link to='/signIn'>
                <p>
                    <HowToRegIcon />
                    SignIn
                </p>
            </Link>
            <Link to='/signUp'>
                <p>
                    <GroupAddIcon />
                    Register
                </p>
            </Link>
            <Link to='/AdminSignIn'>
                <p>
                    <HowToRegIcon/>
                    Admin
                </p>
            </Link>
        </div>
    )
}

export default topBar
