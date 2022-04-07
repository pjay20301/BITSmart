import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';
import SignUp from './components/signUp/SignUp.jsx';
import SignIn from './components/signIn/signIn.jsx';
import Customer from './components/customer/customer.jsx';
import Vendor from './components/vendor/vendor.jsx';
import DeliveryPerson from './components/deliveryPerson/deliveryPerson.jsx';
import Sidebar from './components/vendorDashboard/sidebar';
import CreateProduct from './components/vendorDashboard/createProduct';
import ViewProduct from './components/vendorDashboard/viewProduct';
import Dashboard from './components/customerDashboard/dashboard';
import LP from './components/lp/lp.jsx';
import CustomerProfile from './components/customerDashboard/customerProfile';
import ViewVendors from './components/customerDashboard/viewVendors';


function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LP />} />
                <Route exact path='/signIn' element={<SignIn />} />
                <Route exact path='/signUp' element={<SignUp />} />
                <Route exact path='/customer/signUp/' element={<Customer />} />
                <Route exact path='/vendor/signUp/' element={<Vendor />} />
                <Route exact path='deliveryPerson/signUp/' element={<DeliveryPerson />} />
                <Route exact path='/vendorDashboard' element={<Sidebar />} />
                <Route exact path='/create' element={<CreateProduct />} />
                <Route exact path='/all' element={<ViewProduct />} />
                <Route
                    exact
                    path='/customerDashboard'
                    element={<Dashboard />}
                />
                <Route
                    exact
                    path='/customerProfile'
                    element={<CustomerProfile />}
                />
                <Route exact path='/viewVendors' element={<ViewVendors />} />
            </Routes>
        </Router>
  )
}

export default App;
