import React, { Fragment, useEffect, useState } from 'react'
import './createProduct.css'
import { Button } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
import StorageIcon from '@material-ui/icons/Storage'
import SpellcheckIcon from '@material-ui/icons/Spellcheck'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import SideBar from './sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { _id } from '../signIn/signIn.jsx'

const url = 'http://localhost:5000/'

const CreateProduct = () => {
    const em = JSON.parse(localStorage.getItem('vemail'));
    const [imagesPreview, setImagesPreview] = useState([])
    const [images, setImages] = useState([])
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        stock: '',
        image: ''
    });
    const [usr, setUsr] = useState([])
    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(url + 'api/getUser/'+em)
            setUsr(resp.data)
        }
        fetchData()
    }) 
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setProduct({ ...product, [name]: value })
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData();
        myForm.append('name', product.name)
        myForm.append('price', product.price)
        myForm.append('description', product.description)
        myForm.append('stock', product.stock)
        myForm.append('image', product.image)

        console.log(myForm)
        try {
            axios.post(url + `api/create/${usr._id}` , myForm)
        } catch (error) {
            console.log(error)
        }
        navigate('/all')
    }

    const createProductImagesChange = (e) => {
        setProduct({...product, ['image']: e.target.files[0]})
        setImagesPreview([e.target.files[0]])
    }
    return (
        <Fragment>
            <div className='dashboard'>
                <SideBar />
                <div className='newProductContainer'>
                    <form
                        className='createProductForm'
                        encType='multipart/form-data'
                        onSubmit={handleSubmit}
                    >
                        <h1>Create Product</h1>

                        <div>
                            <SpellcheckIcon />
                            <input
                                type='text'
                                name='name'
                                placeholder='Product Name'
                                required
                                value={product.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <AttachMoneyIcon />
                            <input
                                type='number'
                                name='price'
                                placeholder='Price'
                                required
                                value={product.price}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <DescriptionIcon />

                            <textarea
                                placeholder='Product Description'
                                name='description'
                                value={product.description}
                                onChange={handleInput}
                                cols='30'
                                rows='1'
                            ></textarea>
                        </div>

                        <div>
                            <StorageIcon />
                            <input
                                type='number'
                                name='stock'
                                placeholder='stock'
                                required
                                value={product.stock}
                                onChange={handleInput}
                            />
                        </div>

                        <div id='createProductFormFile'>
                            <input
                                type='file'
                                name='image'
                                accept='image/*'
                                multiple
                                onChange={createProductImagesChange}
                            />
                        </div>

                        <div id='createProductFormImage'>
                            <img
                                src={product.image}
                                alt='Product Preview'
                            />
                        </div>

                        <button
                            id='createProductBtn'
                            type='submit'
                            // disabled={loading ? true : false}
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateProduct
