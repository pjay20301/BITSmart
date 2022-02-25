import React, { useState } from 'react'
import axios from 'axios'
import './signIn.css'
import signInImg from './signin-image.jpg'
import { use } from 'bcrypt/promises'
import { useNavigate } from 'react-router-dom'
const url = 'http://localhost:5000/api/';

const SignIn = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setUserLogin({...userLogin, [name]: value})
    }
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...userLogin }
    try {
        console.log(user)
        axios.post(url + 'signIn', user)
    } catch (error) {
        console.log(error)
    }

    navigate('/Dashboard')
}
    return (
        <>
        <section className='signin'>
            <div className='container'>
            <div className='signin-content'>
                <div className='signin-form'>
                <h2 className='form-title'>Sign in</h2>
                <form method='POST' className='register-form' id='register-form'>
                    <div className='form-group'>
                    <label htmlFor='email'>
                        <i className='zmdi zmdi-email'></i>
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={userLogin.email}
                        onChange={handleInput}
                        placeholder='Your Email'
                    />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='pass'>
                        <i className='zmdi zmdi-lock'></i>
                    </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={userLogin.password}
                        onChange={handleInput}
                        placeholder='Password'
                    />
                    </div>
                    <div className='form-group form-button'>
                    <input
                        type='submit'
                        name='signin'
                        id='signin'
                        className='form-submit'
                        value='Login'
                        onClick={handleSubmit}
                    />
                    </div>
                </form>
                </div>
            </div>
            <div className='signin-image'>
                <figure>
                <img src={signInImg} alt='sign up image'></img>
                </figure>
                <a href='/signUp' className='signin-image-link'>
                Create a new account?
                </a>
            </div>
            </div>
        </section>
        </>
    );
};

export default SignIn;