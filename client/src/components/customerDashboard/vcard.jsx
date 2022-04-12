import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
export default function VCard({vendor}) {
  return (
    <Link className='productCard' to={`/vendorProduct/${vendor._id}`} >
    <Card className='prcard' sx={{ maxWidth: 345 }}>
      <CardContent className='prcardcontent'>
        <Typography className='prcardty' gutterBottom variant="h5" component="div">
        <b> {`${vendor.shopName}`}</b>

        </Typography>
        <Typography className='prcardty' variant="body1" color="text.secondary">
        <b> Address: </b>{`${vendor.address}`}
        </Typography>

      </CardContent>

    </Card>
    </Link>
  );
}
