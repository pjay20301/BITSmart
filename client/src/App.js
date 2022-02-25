import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUp/SignUp.jsx';
import SignIn from './components/signIn/signIn'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App;
