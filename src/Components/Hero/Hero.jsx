import React from 'react'
import { FaJoint } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { easeInOut } from 'motion'
import {motion} from "motion/react"
import lottie from '../../assets/Animation - 1742313286293.json'
import Lottie from 'lottie-react'

export default function Home() {
    return (
        <div>
            <div className="hero bg-linear-to-r/hsl from-indigo-500 to-teal-400 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={lottie}></Lottie>
                    <div data-aos="fade-right">
                    <motion.h1 
                        animate={{x:50}}
                        transition={{duration:2, delay:1 , ease: easeInOut, repeat:Infinity}}
                        className="md:text-5xl text-2xl font-bold">Develop your <motion.span 
                        animate={{color:['#cc00cc','#009933','#000099']}}
                        transition={{duration:1.5, repeat:Infinity}}
                        >Skills</motion.span> in a new and unique way</motion.h1>
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
