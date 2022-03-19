import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import SignUp from './components/signUp/SignUp.jsx';
import SignIn from './components/signIn/signIn.jsx';
import Customer from './components/customer/customer.jsx';
import Vendor from './components/vendor/vendor.jsx';
import DeliveryPerson from './components/deliveryPerson/deliveryPerson.jsx';
import Sidebar from './components/vendorDashboard/sidebar';
import CreateProduct from './components/vendorDashboard/createProduct';
import ViewProduct from './components/vendorDashboard/viewProduct';
import LandingPage from './components/lp/lp.jsx'

function App() {
    console.log("in react app.js")
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/signIn' element={<SignIn />} />
                <Route exact path='/signUp' element={<SignUp />} />
                <Route exact path='/customer/signUp' element={<Customer />} />
                <Route exact path='/vendor/signUp' element={<Vendor />} />
                <Route
                    exact
                    path='/deliveryPerson/signUp'
                    element={<DeliveryPerson />}
                />
                <Route exact path='/vendorDashboard' element={<Sidebar />} />
                <Route exact path='/create' element={<CreateProduct />} />
                <Route exact path='/all' element={<ViewProduct />} />
            </Routes>
        </Router>
    )
}

export default App;
