import React, { useState } from 'react'
import axios from 'axios'
import './customer.css'
import customerImg from './signup-image.jpg'
import { use } from 'bcrypt/promises'
import { useNavigate } from 'react-router-dom'
const url = 'http://localhost:5000/'

const Customer = () => {
  
  const [customerRegister, setCustomerRegister] = useState({
    name: '',
    address: '',
    phone: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setCustomerRegister({ ...customerRegister, [name]: value })
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...customerRegister }
    try {
      console.log(user)
      axios.post(url + 'api/customer/signUp', user)
    } catch (error) {
      console.log(error)
    }

    navigate('/all')
  }
  return (
    <>
      <section className='customer'>
        <div className='container'>
          <div className='customer-content'>
            <div className='customer-form'>
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
                    value={customerRegister.name}
                    onChange={handleInput}
                    placeholder='Name'
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
                    value={customerRegister.address}
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
                    value={customerRegister.phone}
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
          <div className='customer-image'>
            <figure>
              <img src={customerImg} alt='sign up image'></img>
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

export default Customer
