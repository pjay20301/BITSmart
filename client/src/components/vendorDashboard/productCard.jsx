import React from 'react'
import { Link } from 'react-router-dom'
//import srcimg from '../../images/logo192.png'
const ProductCard = ({ product }) => {
    const imgurl = product.image
    console.log(imgurl)
    return (
        <Link className='productCard' to='/all'>
            <img
                src={require(`../../images/${imgurl}`)}
                alt={product.name}
            />
            <div>
                <p>{product.name}</p>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    )
}

export default ProductCard