import React, { useState } from 'react'
import axios from 'axios'
import './SignUp.css'
import signUpImg from './signup-image.jpg'
import { useNavigate } from 'react-router-dom'
import logo from '../lp/logo1.png'
import { Link } from 'react-router-dom'
const url = 'https://bits-smart.herokuapp.com/' || 'http://localhost:5000/'

const SignUp = () => {
    console.log(url)
    const [userRegisteration, setUserRegisteration] = useState({
        email: '',
        password: '',
        rePassword: '',
        role: '',
    })
    const [error, setError] = useState({
        error: false,
        msg: '',
    })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserRegisteration({ ...userRegisteration, [name]: value })
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { ...userRegisteration }
        axios
            .post(url + 'api/signUp', user)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                // ERROR
                console.log('axios error', error.response)
                setError((err) => ({
                    ...err,
                    error: true,
                    msg: error.response?.data.message,
                }))
            })
        
        if(user.role === 'customer') {
            navigate('/customer/signUp')
        } else if(user.role === 'vendor') {
            navigate('/vendor/signUp') 
        } else if(user.role === 'deliveryPerson') {
            navigate('deliveryPerson/signUp')
        }
        
    }
    return (
        <>
            {/* <div className='topbar'>
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
            </div> */}
            <section className='signup'>
                <div className='container'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign up</h2>
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
                        {/* <figure>
                            <img
                                src={logo}
                                alt='logo'
                                style={{ width: 200, height: 100 }}
                            ></img>
                        </figure>
                        <text>Shop smart with BITSmart</text> */}
                        <figure>
                            <img src={signUpImg} alt='sign up image'></img>
                        </figure>
                        <Link to='/signIn'>I am already a member</Link>
                        {/* <a href='/signIn' className='signup-image-link'></a> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
