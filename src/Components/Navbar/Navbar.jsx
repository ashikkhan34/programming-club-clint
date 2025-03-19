import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo-1.png"
import useAuth from '../../Hooks/useAuth'
import './navbar.css'

export default function Navbar() {
    const { user,logOut } = useAuth()
    const links = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/about'><li><a>About Us</a></li></NavLink>
        <NavLink to='/events'><li><a>Events</a></li></NavLink>
        <NavLink to='/projects'><li><a>Projects</a></li></NavLink>
        <NavLink to='/members'><li><a>Membership</a></li></NavLink>
        <NavLink to='/blog'><li><a>Photo Gallery</a></li></NavLink>
        <NavLink to='/contact'><li><a>Contact Us</a></li></NavLink>

    </>
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar shadow-sm fixed z-20  top-0 w-full bg-opacity-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <Link><img className='w-10 ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p className=' text-blue-500 font-serif md:text-xl '>{user?.displayName}</p>
                            {/* <p>{user?.email}</p> */}
                            {/* <img className='w-10 h-10 rounded-full mr-3' src={user?.photoURL} alt="" /> */}

                            

                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className=" mr-4">
                                <img className='w-10 h-10 rounded-full mr-3' src={user?.photoURL} alt="" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-4 shadow-sm">
                                    <li><button  onClick={handleLogOut}>LogOut</button></li>
                                </ul>
                            </div>


                        </> :

                            <>
                                <Link to='/signUp'>
                                    <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-500 rounded-lg group">
                                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                        <span class="relative">Join Us</span>
                                    </a>
                                </Link>

                            </>
                    }
                </div>
            </div>
        </div>
    )
}
// 