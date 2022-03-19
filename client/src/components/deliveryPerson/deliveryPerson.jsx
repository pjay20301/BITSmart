import React, { useState } from 'react'
import axios from 'axios'
import './deliveryPerson.css'
import deliveryPersonImg from './signup-image.jpg'
import { use } from 'bcrypt/promises'
import { useNavigate } from 'react-router-dom'
const url = 'https://bits-smart.herokuapp.com/' || 'http://localhost:5000/api/'

const DeliveryPerson = () => {
  
  const [deliveryPersonRegister, setdeliveryPersonRegister] = useState({
    name: '',
    phone: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setdeliveryPersonRegister({ ...deliveryPersonRegister, [name]: value })
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...deliveryPersonRegister }
    try {
      axios.post(url + 'api/deliveryPerson/signUp', user)
    } catch (error) {
      console.log(error)
    }

    navigate('/deliverPersonDashboard')
  }
  return (
    <>
      <section className='deliveryPerson'>
        <div className='container'>
          <div className='deliveryPerson-content'>
            <div className='deliveryPerson-form'>
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
                    value={deliveryPersonRegister.name}
                    onChange={handleInput}
                    placeholder='Name'
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
                    value={deliveryPersonRegister.phone}
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
          <div className='deliveryPerson-image'>
            <figure>
              <img src={deliveryPersonImg} alt='sign up image'></img>
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

export default DeliveryPerson
