import React from 'react'
import { FaJoint } from 'react-icons/fa'
import img from '../../assets/19.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="hero bg-lime-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        data-aos="fade-left"
                        src={img}
                        className=" max-w-sm rounded-lg shadow-2xl" />
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Develop your <span className='text-purple-500 font-semibold'>skills</span> in a new and unique way</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/signUp'>
                            <button className="btn btn-primary">Join Us <FaJoint></FaJoint> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
