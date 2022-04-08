import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './adminSignIn.css'

const AdminSignIn = () => {

        
    const [userLogin, setUserLogin] = useState({
        pass: ''
    });
    const [error, setError] = useState({
        error: false,
        msg: '',
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setUserLogin({...userLogin, [name]: value})
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { ...userLogin }
        if(user.pass === "admin123"){
            navigate('/request');
        }
        else{
            error.error=true;
            error.msg="          Incorrect Password, Forgot password? Please contact us..."
        }
    }

    return (
        <>
        <div className='admin-box'>
            <div className='admin-login'>
                <h1>Admin Login</h1>
                <figure>
                    <img src="https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg" alt="hi"
                     style={{width: 200, height: 200, borderRadius: 100}}  />
                </figure>
                <form
                    method='POST'
                    className='admin-register-form'
                    id='admin-register-form'>
                
                <div className='form-group'>
                <i className='zmdi zmdi-lock'></i>
                                    <input
                                        type='password'
                                        name='pass'
                                        id='pass'
                                        placeholder='Password'
                                        value={userLogin.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                {error.error && (
                                <p
                                    style={{
                                        color: 'red',
                                        background: 'transparent',
                                    }}
                                >
                                    {error.msg}
                                </p>
                            )}
                            <button className='b1' onClick={handleSubmit} method="POST">Log In</button>
                        </form>
                </div>

            </div>

        </>
    )
}

export default AdminSignIn;