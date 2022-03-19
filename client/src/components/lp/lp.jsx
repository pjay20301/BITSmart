import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './lp.css'
import logo from './logo1.png'
import img1 from './img1.png'
import img2 from './img2.jpeg'
import img3 from './img3.png'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import PhoneIcon from '@material-ui/icons/Phone'

const LP = () => {
    return (
        <>
            <div className='landingPage'>
                <div className='topbar'>
                    <Link to='/'>
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
                </div>
                <div className='lp-container'>
                    <div className='lp-img'>
                        <img src={img1} alt='i1' width='850' height='580' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LP
