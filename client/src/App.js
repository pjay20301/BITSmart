import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import SignUp from './components/signUp/SignUp.jsx';
import SignIn from './components/signIn/signIn.jsx';
import Customer from './components/customer/customer.jsx';
import Vendor from './components/vendor/vendor.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signIn' element={<SignIn />} />
        <Route exact path='/signUp' element={<SignUp />} />
        <Route exact path='/customer/signUp' element={<Customer />} />
        <Route exact path='/vendor/signUp' element={<Vendor />} />
      </Routes>
    </Router>
  )
}

export default App;
