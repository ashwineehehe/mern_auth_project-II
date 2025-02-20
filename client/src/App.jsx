import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import EmailVerify from './pages/emailverify'
import Login from './pages/login'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
       <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/rest-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
