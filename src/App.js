import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Homepage/Home'
import './App.css'
import './Components/User/User.js'
import './Components/Sidebar.css'



import Sidebar from './Components/SideMenu.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Personal_information from './Pages/Peronal_information.jsx'
import Manage_Address from './Pages/Manage_Address.jsx'
import Payment_card_Information from './Pages/Payment_card_Information.jsx'
import All_notifications from './Pages/All_notifications.jsx'

import { Navbar } from 'react-bootstrap'
 

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Navbar />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Home />} />
    
  </Routes>
  </BrowserRouter>
  <></>
 <BrowserRouter>
 <Sidebar>
 <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/Personal_information" element={<Personal_information/>} />
          <Route path="/Manage_Address" element={<Manage_Address/>} />
          <Route path="/Payment_card_Information" element={<Payment_card_Information/>} />
          <Route path="/All_notifications" element={<All_notifications/>} />
        </Routes>
 </Sidebar>
 </BrowserRouter></> 
  )
}



export default App
