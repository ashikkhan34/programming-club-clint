import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function MainLayOut() {
  return (
    <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        
        <Footer></Footer>
    </div>
  )
}
