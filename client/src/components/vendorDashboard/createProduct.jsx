import React, { Fragment, useEffect, useState } from 'react'
import './createProduct.css'
import { useSelector, useDispatch } from 'react-redux'
//import { clearErrors, createProduct } from '../../actions/productAction'
import { useAlert } from 'react-alert'
import { Button } from '@material-ui/core'
// import MetaData from '../layout/MetaData'
// import AccountTreeIcon from '@material-ui/icons/AccountTree'
import DescriptionIcon from '@material-ui/icons/Description'
import StorageIcon from '@material-ui/icons/Storage'
import SpellcheckIcon from '@material-ui/icons/Spellcheck'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import SideBar from './sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// import { NEW_PRODUCT_RESET } from '../../constants/productConstants'

const url = 'http://localhost:5000/api';

const CreateProduct = () => {
    //const dispatch = useDispatch()
    //const alert = useAlert()

    //const { loading, error, success } = useSelector((state) => state.newProduct)

    // const [product, setProduct] = useState({
    //     name: '',
    //     price: '',
    //     description: '',
    //     stock: '',
    //     images: [{
    //         public_id: '',
    //         url: ''
    //     }]
    // });
    // const [name, setName] = useState('')
    // const [price, setPrice] = useState(0)
    // const [description, setDescription] = useState('')
    // const [stock, setStock] = useState(0)
    //const [images, setImages] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        stock: '',
        image: ''
    })

    // useEffect(() => {
    //     if (error) {
    //     alert.error(error)
    //     }

    //     if (success) {
    //     alert.success('Product Created Successfully')
    //     history.push('vendor/dashboard')
    //     }
    // })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setProduct({ ...product, [name]: value })
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        //const myForm = {...product};
        const myForm = new FormData();
        myForm.append('name', product.name)
        myForm.append('price', product.price)
        myForm.append('description', product.desctiption)
        myForm.append('stock', product.stock)
        myForm.append('image', product.image)
        // myForm.set('name', name)
        // myForm.set('price', price)
        // myForm.set('description', description)
        // myForm.set('stock', stock)

        // images.forEach((image) => {
        //     myForm.append('images', image)
        // }) 
        //myForm.images = image
        console.log(myForm)
        try {
            axios.post(url + '/create', myForm)
        } catch (error) {
            console.log(error)
        }
        navigate('/vendorDashboard')
    }

    const createProductImagesChange = (e) => {
        setProduct({...product, ['image']: e.target.files[0]})
        // const files = Array.from(e.target.files)
        // console.log(files)
        // //setProduct({...product, [images]: files})
        setImagesPreview([])

        // files.forEach((file) => {
        // const reader = new FileReader()

        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //     setImagesPreview((old) => [...old, reader.result])
        //     //setImages((old) => [...old, reader.result])
        //     }
        // }

        // reader.readAsDataURL(file)
        // })
    }

    return (
        <Fragment>
            {/* <MetaData title='Create Product' /> */}
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
                            {imagesPreview.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt='Product Preview'
                                />
                            ))}
                        </div>

                        <Button
                            id='createProductBtn'
                            type='submit'
                            // disabled={loading ? true : false}
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateProduct
