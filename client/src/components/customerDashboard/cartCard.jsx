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
export default function CartCard({ product }) {
    return (
      <div className='cartCard'>
      <img src={product.image.url}
          alt="product img" style={{width: 100, height: 100,}}/>
        <p>
        <b>{product.name}</b>
        </p>
        {/*}<p>
        <b>Description: </b>{`${product.description}`}
    </p>*/}
        <p>
        <b>Price: </b>{`₹${product.price}`}
        </p>
        <div className='qty'>
        <b>Quantity</b>
        <button className='qtyb'>+</button>
        <input
            type='phone'
            name='phone'
            id='phone'
            placeholder='Phone'
                />
        <button className='qtyb'>-</button>
        </div>
        <button>Delete</button>
      </div>
    );
  }