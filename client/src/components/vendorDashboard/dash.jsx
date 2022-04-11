import React, { Fragment, useEffect, useState } from 'react'
import './dash.css'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import SideBar from './sidebar'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
import VProfile from './vProfile'
const url = 'http://localhost:5000/'
const Dash = () => {
    const em = JSON.parse(localStorage.getItem('vemail'));

    const [usr, setUsr] = useState([])
    //let products = [];
    useEffect(() => {

        async function fetchData() {
            const resp = await axios.get(url + 'api/getUser/'+em)
           // console.log(resp.data._id)
            const response = await axios.get(url + `api/vendprof/${resp.data._id}`)
            setUsr(response.data)
            //products = response.data
           // console.log(response.data.name)
        }
        fetchData()
    })
    return(
    <Fragment>
        <div className='dashboard'>
            <SideBar />
            <div className='container'>
                <VProfile key={usr._id}
                         usr={usr} ema={em}/>
            </div>
        </div>
    </Fragment>
)
}

export default Dash;


