import React from 'react'
import { Link } from 'react-router-dom'
import './productCard.css'
/* import * as React from 'react';

 */
/* import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
 */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-ui/core/Button';

import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


/* const ProductCard = ({ product }) => {
    const imgurl = product.image.url
    return (
        <Link className='productCard' to='/all'>
            <img src={product.image.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
            </div>
            <span>{`₹${product.price}`}</span>
            <span>{`${product.description}`}</span> 
        </Link>
    )
}

export default ProductCard
 */



export default function ProductCard({ product }) {
  return (
    <Link className='productCard' to='/all'>
    <Card className='prcard' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image.url}
        alt="product img"
      />
      <CardContent className='prcardcontent'>
        <Typography className='prcardty' gutterBottom variant="h5" component="div">
        <b> {product.name}</b>

        </Typography>
        <Typography className='prcardty' variant="body1" color="text.secondary">
        <b> Description: </b>{`${product.description}`}
        </Typography>
        <Typography className='prcardty' variant="body1" color="text.secondary">
        <b>Stock: </b>{`${product.stock}`}
        </Typography>
        <Typography className='prcardty' variant="body1" color="text.black">

        <b>Rate:</b> {`₹${product.price}`}
      </Typography>

      </CardContent>

      <CardActions>
      <Rating name="read-only" value="0" readOnly />     
      </CardActions>
      
      <CardActions>

      <button className='b'>Edit Product</button>
      <button className='b'>View Reviews</button>
     
      </CardActions>
    </Card>
    </Link>
  );
}
