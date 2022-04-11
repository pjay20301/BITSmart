import React, { Fragment, useEffect, useState } from 'react';
import './profileCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import navBar from './navbar';
import axios from 'axios';
const url = 'http://localhost:5000/'
const ProfileCard =({ usr,ema })=>{
    return(
    <>
        <div className='pcard'>
            <div className='pcardh'>
                <h3>User Profile</h3>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" style={{width: 100, height: 100, borderRadius: 100}}/>
            </div>
            <div className='pcardb'>
                <p><b>Email: </b> <i>{`${ema}`}</i></p>
                <p><b>Name: </b>
                <input
                        type='name'
                        name='name'
                        id='name'
                        value= {`${usr.name}`}
                        /></p>
                <p><b>Phone: </b>
                <input
                        type='phone'
                        name='phone'
                        id='phone'
                        value= {`${usr.phone}`}
                        />
                        </p>
                <p><b>Address: </b>
                <input
                        type='textarea'
                        name='textarea'
                        id='address'
                        value= {`${usr.address}`}
                        rows={5}
                        cols={5}
                        /></p>
                <button>Edit Profile</button>
            </div>
        </div>
    </>
    );
    }
export default ProfileCard;