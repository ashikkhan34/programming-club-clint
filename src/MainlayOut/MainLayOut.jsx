import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function MainLayOut() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
