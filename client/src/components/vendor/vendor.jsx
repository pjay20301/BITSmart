import React, { useState } from 'react'
import axios from 'axios'
import './vendor.css'
import vendorImg from './signup-image.jpg'
import { use } from 'bcrypt/promises'
import { useNavigate } from 'react-router-dom'
const url = 'http://localhost:5000/api/'

const Vendor = () => {
  const [vendorRegister, setvendorRegister] = useState({
    name: '',
    shopName: '',
    address: '',
    phone: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setvendorRegister({ ...vendorRegister, [name]: value })
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...vendorRegister }
    try {
      console.log(user)
      axios.post(url + 'vendor', user)
    } catch (error) {
      console.log(error)
    }

    navigate('/Dashboard')
  }
  return (
    <>
      <section className='vendor'>
        <div className='container'>
          <div className='vendor-content'>
            <div className='vendor-form'>
              <h2 className='form-title'>Sign in</h2>
              <form method='POST' className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i className='zmdi zmdi-email'></i>
                  </label>
                  <input
                    type='name'
                    name='name'
                    id='name'
                    value={vendorRegister.name}
                    onChange={handleInput}
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='shopName'>
                    <i className='zmdi zmdi-email'></i>
                  </label>
                  <input
                    type='shopName'
                    name='shopName'
                    id='shopName'
                    value={vendorRegister.shopName}
                    onChange={handleInput}
                    placeholder='Shop Name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='address'>
                    <i className='zmdi zmdi-lock'></i>
                  </label>
                  <input
                    type='address'
                    name='address'
                    id='address'
                    value={vendorRegister.address}
                    onChange={handleInput}
                    placeholder='Address'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='Phone'>
                    <i className='zmdi zmdi-lock'></i>
                  </label>
                  <input
                    type='phone'
                    name='phone'
                    id='phone'
                    value={vendorRegister.phone}
                    onChange={handleInput}
                    placeholder='phone'
                  />
                </div>
                <div className='form-group form-button'>
                  <input
                    type='submit'
                    name='signin'
                    id='signin'
                    className='form-submit'
                    value='Register'
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='vendor-image'>
            <figure>
              <img src={vendorImg} alt='sign up image'></img>
            </figure>
            <a href='/signUp' className='signin-image-link'>
              Create a new account?
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vendor
