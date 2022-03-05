import React, { useState } from 'react'
import axios from 'axios';
import './SignUp.css'
import signUpImg from './signup-image.jpg'
import { use } from 'bcrypt/promises';
import { useNavigate } from 'react-router-dom';
const url = 'https://bits-smart.herokuapp.com/api/'


const SignUp = () => {
    const [userRegisteration, setUserRegisteration] = useState({
        email: '',
        password: '',
        rePassword: '',
        role: ''
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegisteration({...userRegisteration, [name]: value})
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const user = { ...userRegisteration }
        try {
            axios.post(url + 'signUp', user)
        } catch (error) {
            console.log(error)
        }

        navigate('/signIn')
        

    };
    return (
    <>
    <section className='signup'>
        <div className='container'>
        <div className='signup-content'>
            <div className='signup-form'>
            <h2 className='form-title'>Sign up</h2>
            <form
                method='POST'
                className='register-form'
                id='register-form'
            >
                <div className='form-group'>
                <label htmlFor='email'>
                    <i className='zmdi zmdi-email'></i>
                </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={userRegisteration.email}
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
                    value={userRegisteration.password}
                    onChange={handleInput}
                    placeholder='Password'
                />
                </div>
                <div className='form-group'>
                <label htmlFor='re-pass'>
                    <i className='zmdi zmdi-lock-outline'></i>
                </label>
                <input
                    type='password'
                    name='rePassword'
                    id='rePassword'
                    value={userRegisteration.rePassword}
                    onChange={handleInput}
                    placeholder='Repeat your password'
                />
                </div>
                <div className='radio-buttons'>
                <div className='form-group'>
                    Customer
                    <input
                    type='radio'
                    name='role'
                    id='customer'
                    onChange={handleInput}
                    value='customer'
                    />
                    Vendor
                    <input
                    type='radio'
                    name='role'
                    id='vendor'
                    onChange={handleInput}
                    value='vendor'
                    />
                    Delivery Person
                    <input
                    type='radio'
                    name='role'
                    id='deliveryPerson'
                    onChange={handleInput}
                    value='deliveryPerson'
                    />
                </div>
                </div>
                <div className='form-group form-button'>
                <input
                    type='submit'
                    name='signup'
                    id='signup'
                    className='form-submit'
                    value='Register'
                    onClick={handleSubmit}
                />
                </div>
            </form>
            </div>
        </div>
        <div className='signup-image'>
            <figure>
            <img src={signUpImg} alt='sign up image'></img>
            </figure>
            <a href='/signIn' className='signup-image-link'>
            I am already a member
            </a>
        </div>
        </div>
    </section>
    </>
    )
}

export default SignUp;