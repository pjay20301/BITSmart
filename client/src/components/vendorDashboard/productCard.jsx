import React from 'react'
import { Link } from 'react-router-dom'
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image.url}
        alt="product img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}

        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description: {`${product.description}`}
        </Typography>
        <Typography variant="body2" color="text.black">

      Rate: {`₹${product.price}`}
      </Typography>

      </CardContent>

      <CardActions>
      <Rating name="read-only" value="5" readOnly />     
      </CardActions>
      
      <CardActions>

      <Button variant="outlined" >EDIT</Button>
     
      </CardActions>
    </Card>
    </Link>
  );
}
