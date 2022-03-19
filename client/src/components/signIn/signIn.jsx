import React, { useState , useEffect} from 'react'
import axios from 'axios'
import './signIn.css'
import signInImg from './signin-image.jpg'
import { use } from 'bcrypt/promises'
import { useNavigate } from 'react-router-dom'
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'

let url;
const SignIn = () => {
    if (process.env.NODE_ENV === 'production') {
        url = 'https://bits-smart.herokuapp.com/' 
    } else {
        url = 'http://localhost:5000/'
    }

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
// async function getRole(email) {
//     await axios.get(url + `api/getRole/${email}`)
//     .then((response) => {
//         if(!response.data) {
//             console.log("error occured while fetching role")
//         } else {
//             console.log(response.data)
//             return response.data
//         }
//     })
// }
const [User, setUser] = useState()
async function getRole(email) {
    const response = await axios.get(url + `api/getRole/${email}`)
    setUser(response.data)
}
const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...userLogin }
    try {
        console.log(user)
        axios.post(url + 'api/signIn', user)
    } catch (error) {
        console.log(error)
    }
    //const user1 = getRole(user.email)
    getRole(user.email)
    const user1 = {...User}
    console.log(user1)
    if (user1.role === 'customer') {
        navigate('/all')
    } else if (user1.role === 'vendor') {
        navigate('/vendorDashboard')
    } else if (user1.role === 'deliveryPerson') {
        navigate('/deliveryPersonDashboard')
    }
}
    return (
        <>
            <section className='signin'>
                <div className='container'>
                    <div className='signin-content'>
                        <div className='signin-form'>
                            <h2 className='form-title'>Sign in</h2>
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
                        <figure>
                            <img
                                src={logo}
                                alt='logo'
                                style={{ width: 200, height: 100 }}
                            ></img>
                        </figure>
                        <text>Shop smart with BITSmart</text>
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