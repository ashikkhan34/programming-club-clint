import React from 'react';
import { FaAddressBook, FaEnvelope, FaHome, FaUsers } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdEmojiEvents } from 'react-icons/md';
import { PiProjectorScreenFill } from 'react-icons/pi';
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>
            {/* Sidebar */}
            <div className='w-full md:w-64 bg-blue-950  p-4 md:min-h-screen'>
                <ul className="menu text-white space-y-2">
                    <li><NavLink to='/dashboard/adminHome' className='flex items-center gap-2'><FaHome /> Admin Home </NavLink></li>
                    <li><NavLink to='/dashboard/addMember' className='flex items-center gap-2'><FaAddressBook /> Add Member </NavLink></li>
                    <li><NavLink to='/dashboard/users' className='flex items-center gap-2'><FaUsers /> All Users </NavLink></li>
                    <li><NavLink to='/dashboard/addEvents' className='flex items-center gap-2'><MdEmojiEvents /> Add an Events </NavLink></li>
                    <li><NavLink to='/dashboard/addProject' className='flex items-center gap-2'><PiProjectorScreenFill /> Add Projects </NavLink></li>
                    <li><NavLink to='/dashboard/addBlog' className='flex items-center gap-2'><PiProjectorScreenFill /> Add Photo </NavLink></li>
                    <li><NavLink to='/dashboard/eventMembers'> <FaUsers></FaUsers> EventMembers</NavLink></li>

                    {/* shared nav link */}
                    <div className="divider divider-info"></div>

                    <li><NavLink to='/' className='flex items-center gap-2'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/about' className='flex items-center gap-2'><FcAbout /> About</NavLink></li>
                    <li><NavLink to='/contact' className='flex items-center gap-2'><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='flex-1 bg-indigo-950 text-gray-300 p-4'>
                <Outlet />
            </div>
        </div>
    );
}
