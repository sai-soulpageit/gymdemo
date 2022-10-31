import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

// for router
// import ReactDOM from "react-dom/client";
// import { Routes, Route } from "react-router-dom";
// import  Demoprograms  from "../Pages/Demoprograms";

import { Link } from "react-router-dom";
import Hero from '../Hero/Hero';


const Header = () => {
  return (

    <div className="header">
      


        <img src={Logo} alt="logo" className="logo"/>
        {/* why this step */}
        <ul className="header-menu">

            <li>Home</li>

            {/* <Link to ="/programs"> <li> Programs </li> </Link> */}

            <li> Programs </li> 
              
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>

{/*         
            <Routes>
              <Route exact path="/programs" element={<Demoprograms/>}></Route>
            </Routes> */}
         
       
    </div>
  )
}

export default Header