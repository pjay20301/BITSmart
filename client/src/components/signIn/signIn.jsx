import React, { useState , useEffect} from 'react'
import axios from 'axios'
import './signIn.css'
import signInImg from './signin-image.jpg'
import { useNavigate } from 'react-router-dom'
import logo from '../lp/logo1.png'
import { Link } from 'react-router-dom'

const url = 'http://localhost:5000/'

const SignIn = () => {
    
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
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
    try {
        try {
            const res = await axios.post(url + 'api/signIn', user)
            console.log('res', res)
        } catch (error) {
            setError((err) => ({ ...err, error: true, msg: 'User not found' }))
            console.log('error', error)
        }
        const response = await axios.get(url + `api/getUser/${user.email}`)
        const role = response.data.role
        if (role === 'customer') {
            const _id = response.data._id
            localStorage.setItem('cemail', JSON.stringify(userLogin.email))
            navigate('/customerDashboard')
        } else if (role === 'vendor') {
            const _id = response.data._id
            localStorage.setItem('vemail', JSON.stringify(userLogin.email))
            navigate('/dash')
        } else if (role === 'deliveryPerson') {
            navigate('/deliveryPersonDashboard')
        }
            
    } catch (error) {
        console.log(error)
    }
    
    

}
    return (
        <>
            <section className='signin'>
                <div className='s-container'>
                    <div className='signin-content'>
                        <div className='signin-form'>
                            <h2 className='form-title'>Sign in</h2>
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
                        {/* <figure>
                            <img
                                src={logo}
                                alt='logo'
                                style={{ width: 200, height: 100 }}
                            ></img>
                        </figure>
                        <text>Shop smart with BITSmart</text> */}
                        <figure>
                            <img src={signInImg} alt='sign up image'></img>
                        </figure>
                        <Link to='/signUp'>Create a new account?</Link>
                        {/* <a href='/signUp' className='signin-image-link'></a> */}
                    </div>
                </div>
            </section>
        </>
    )
};

export default SignIn;

