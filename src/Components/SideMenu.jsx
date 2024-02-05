import React, { useState } from 'react';
import {
    FaTh,

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Personal_information",
            name:"Personal Information",
            icon:<FaTh/>
        },
        {
            path:"/Manage_Address",
            name:"Manage Address",
            icon:<FaTh/>
        },
        {
            path:"/Payment_card_Information",
            name:"Payment Card Information",
            icon:<FaTh/>
        },
        {
            path:"/All_notifications",
            name:"All Notifications",
            icon:<FaTh/>
        },
       

    ]
    return (
      <>  <div className="container">
           <div style={{width: setIsOpen ? "200px" : "200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: setIsOpen ? "block" : "none"}} className="logo">Hello Rv</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"> 
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="Name">{item.Name}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                       
                   ))
               }
           </div>
           <main>{children}</main>
        </div>

       
<div className="container2">
<div style={{width: setIsOpen ? "200px" : "200px"}} className="sidebar">
    <div className="top_section">
        <h1 style={{display: setIsOpen ? "block" : "none"}} className="logo">Hello Rv</h1>
        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"> 
        </div>
    </div>
    {
        menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="Name">{item.Name}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
            
        ))
    }
</div>
<main>{children}</main>
</div></>
    );
};

export default Sidebar;