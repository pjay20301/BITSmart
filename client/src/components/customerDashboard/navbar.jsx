import React, { Fragment, useEffect, useState } from 'react';
import './navbar.css';
import "react-pro-sidebar/dist/css/styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import navBar from './navbar';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent,} from "react-pro-sidebar";
import { FiHome, FiLogOut} from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineShop,AiOutlineMenuFold,AiOutlineMenuUnfold } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {ImHistory} from "react-icons/im";
import logo from './logo-crop.png';

const NavBar = () => {
        //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(false);
      };
    const menuItemClick = () =>{

    };
    return (
        <>
            <div id='header'>
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className='closemenu' onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {/* {menuCollapse ? (
                  <AiOutlineMenuUnfold/>
                ) : (
                  <AiOutlineMenuFold/>
                )} */}
                        </div>
                        <div className='logotext'>
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? 'BM' : 'BITSmart'}</p>
                            {menuCollapse ? (
                                <img
                                    src={logo}
                                    alt='Ecommerce'
                                    width='40'
                                    height='30'
                                />
                            ) : (
                                <img
                                    src={logo}
                                    alt='Ecommerce'
                                    width='70'
                                    height='50'
                                />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape='square'>
                                    <MenuItem icon={<FiHome />}>
                                            Home
                                            <Link to='/customerDashboard'/>
                                    </MenuItem>

                                    <MenuItem icon={<CgProfile />} >
                                            Profile
                                            <Link to='/customerProfile'/>
                                    </MenuItem>


                                    <MenuItem icon={<ImHistory />}>
                                        Order History
                                    </MenuItem>
                                        
                                    <MenuItem icon={<AiOutlineShop />}>
                                            View Products
                                            <Link to='/viewVendors'/>
                                    </MenuItem>
                            <MenuItem icon={<RiShoppingCart2Line />}>
                                Cart
                                <Link to='/viewCart'/>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape='square'>
                            <MenuItem icon={<FiLogOut />} onClick={localStorage.removeItem('cemail')}>Logout <Link to='/'/> </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    )
}
export default NavBar