import React from 'react'
import atik from '../../assets/Atik sir.png'
import humayon from '../../assets/humayun.jpg'
import sobuj from '../../assets/sobuj.jpg'
import masud from '../../assets/masud.jpg'
import shawkat from '../../assets/shwkat.jpg'
import rejaul from '../../assets/rejaul.jpg'
import ismail from '../../assets/ismail.jfif'
import musfik from '../../assets/musfik.jpg'

export default function Review() {
    return (
        <div>
            <div>
            <h1 className='text-3xl font-bold p-5 text-center text-blue-700 '>---Teachers Review---</h1>
        </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 '>

                <div className=' p-5 bg-fuchsia-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={atik} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Atik Hossain </h1>
                    <span>Formal Principal</span>
                    <p className='text-gray-500'>"Great initiative! Ensure regular updates, security, and engaging content. Adding competitions and member profiles will enhance its impact."</p>
                </div>
                <div className=' p-5 bg-purple-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={humayon} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Humayun kabir </h1>
                    <span>Principal</span>
                    <p className='text-gray-500'>"The website is a valuable platform for students. Regular updates, security, and interactive features like competitions will make it more impactful."</p>
                </div>
                <div className=' p-5 bg-pink-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={masud} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Abdullah Al Masud </h1>
                    <span>Chief Instructor and Head of Department</span>
                    <p className='text-gray-500'>"The website is a great step for student engagement. Adding tutorials, project showcases, and mentorship features will enhance its effectiveness.""</p>
                </div>
                <div className=' p-5 bg-rose-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={sobuj} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Mahmudul Islam khan </h1>
                    <span>Instructor and safety officer</span>
                    <p className='text-gray-500'>"An excellent initiative! Ensure it remains well-maintained, informative, and aligned with academic goals. Interactive learning resources would be beneficial."</p>
                </div>
                <div className=' p-5 bg-amber-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={shawkat} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md.Shaukat Imran </h1>
                    <span>Instructor (STEP)</span>
                    <p className='text-gray-500'>"The website is a great initiative for skill development. Adding practical resources, coding challenges, and industry insights will make it more effective."</p>
                </div>
                <div className=' p-5 bg-green-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={rejaul} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Sheikh Rezaul Islam </h1>
                    <span>Instructor</span>
                    <p>"The website is a valuable platform for students. Regular updates, security, and interactive features like competitions will make it more impactful."</p>
                </div>
                <div className=' p-5 bg-purple-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={ismail} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md. Ismail Hossain </h1>
                    <span>Instructor (Non-Cadre) and IT Incharge</span>
                    <p className='text-gray-500'>A well-designed platform for students! Regular updates, coding resources, and hands-on projects will enhance its learning potential."</p>
                </div>
                <div className=' p-5 bg-lime-100 text-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <img src={musfik} alt="" className='w-52 h-52 rounded-full mx-auto justify-center' />
                    <h1 className='font-bold'>Md. Musfaq Us Salehin </h1>
                    <span>Junior Instructor</span>
                    <p className='text-gray-500'>"A promising initiative! Encouraging student participation, adding interactive coding exercises, and maintaining regular updates will enhance its effectiveness."</p>
                </div>
            </div>
        </div>
    )
}
