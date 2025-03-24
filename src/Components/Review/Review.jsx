import React from 'react'
import atik from '../../assets/Atik sir.png'
import humayon from '../../assets/humayun.jpg'
import masud from '../../assets/masud.jpg'
import { Link } from 'react-router-dom'

export default function Review() {
    return (
        <div className='bg-indigo-900'>
            <div>
                <h1 className='text-3xl font-bold p-5 rounded-2xl  border-blue-700 text-center text-cyan-500 '>---Teachers Review---</h1>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000"
                className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg-indigo-900'>

                <div className=' p-5 rounded-2xl border-t-8 border-b-8  border-purple-700 bg-blue-800 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={atik} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Atik Hossain </h1>
                    <span>Formal Principal</span>
                    <p className='text-white'>"Great initiative! Ensure regular updates, security, and engaging content. Adding competitions and member profiles will enhance its impact."</p>
                </div>
                <div className='text-white p-5 rounded-2xl border-t-8 border-b-8 border-red-700 bg-blue-900 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={humayon} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Humayun kabir </h1>
                    <span>Principal</span>
                    <p className='text-gray-300'>"The website is a valuable platform for students. Regular updates, security, and interactive features like competitions will make it more impactful."</p>
                </div>
                <div className=' p-5 rounded-2xl  text-white border-t-8 border-b-8 border-purple-700 bg-blue-950 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={masud} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Abdullah Al Masud </h1>
                    <span>Chief Instructor and Head of Department</span>
                    <p className='text-gray-400'>"The website is a great step for student engagement. Adding tutorials, project showcases, and mentorship features will enhance its effectiveness.""</p>
                </div>
            </div>
            <Link to='/reviewMore'>
                <button className='mx-auto flex p-5 rounded-2xl'>
                <a href="#_" class="relative inline-flex items-center mx-auto text-center justify-center py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-purple-700  group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Review More</span>
                </a>
                </button>
            </Link>
        </div>
    )
}
