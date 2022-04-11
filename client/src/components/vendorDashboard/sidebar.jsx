import React from 'react'
import './sidebar.css'
import logo from '../lp/logo1.png'
import { Link } from 'react-router-dom'
import { TreeView, TreeItem } from '@material-ui/lab'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PostAddIcon from '@material-ui/icons/PostAdd'
import AddIcon from '@material-ui/icons/Add'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ListAltIcon from '@material-ui/icons/ListAlt'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import RateReviewIcon from '@material-ui/icons/RateReview'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <Link to='/dash'>
                    <img src={logo} alt='Ecommerce' />
                </Link>
                <Link to='/dash'>
                    <p>
                        <DashboardIcon /> Dashboard
                    </p>
                </Link>
                {/* <Link> */}
                <Link to='/all'>
                    <p>
                        <PostAddIcon />
                        View Products
                    </p>
                </Link>
                <Link to='/create'>
                    <p>
                        <AddIcon />
                        Add Product
                    </p>
                </Link>
                {/* </Link> */}
                <Link to='/signIn'>
                    <p>
                        <ListAltIcon />
                        Orders
                    </p>
                </Link>
                <Link to='/signIn'>
                    <p>
                        <PeopleIcon /> Users
                    </p>
                </Link>
                <Link to='/signIn'>
                    <p>
                        <RateReviewIcon />
                        Reviews
                    </p>
                </Link>
                <Link to='/'>
                    <p>
                        <ExitToAppIcon />
                        Logout
                    </p>
                </Link>
            </div>
        </>
    )
}

export default Sidebar
