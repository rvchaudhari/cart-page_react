import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/rv_logo.jpg'
import { Routes, Route, BrowserRouter, } from 'react-router-dom/dist/umd/react-router-dom.development'

const Navbar = () => {
    const [cartquantity, setcartquantity] = useState(0)
  return (
   <nav>
    <div className='s1'>
        <img src={logo} alt='logo' className='logo'/>
        <h1>Mo</h1>
        <h2>Market</h2>
        <div className='searchbar'>
            <input type='text' placeholder='Search for product, Brands, Market & more' className='search'/>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
</svg>

            </button>
        </div>
<div className='s2'>
    <div className='user'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg>

    </div>
</div>
        <div className='right'>
            <div className='cart'>Cart
                <span className='qty'>{cartquantity}</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
</svg>
</div>
        </div>
    </div>
    <div className='s3'>
        <a>Mobile & Tablets</a>
        <a>Electrical & Electronic</a>
        <a>Grocery</a>
        <a>Tv & Appliances</a>
        <a>Fashion</a>
        <a>Home & Kitchen</a>
        <a>Furniture</a>
        <a>Grocery</a>
        <a>Grocery</a>
        <a>Grocery</a>
        <a>Top Saving Offer</a>
       
    </div>
   </nav>
  )
}

export default Navbar