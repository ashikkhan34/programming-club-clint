import React from 'react'
import img from '../../assets/room.jfif'
import { motion } from "motion/react"
// import { easeInOut } from 'motion';
import img1 from '../../assets/course/wd-1.jpg'
export default function AboutClub() {
    return (
        <div className='md:flex gap-5 p-9 bg-linear-to-r/hsl from-indigo-500 to-teal-400 '>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='md:w-4/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%p-4 rounded-2xl p-5 text-white'>
                <h1 className='text-2xl'> About the Club</h1>
                <p>Our Programming Club is an educational and collaborative platform where students can enhance their skills in coding, software development, and technology. The club helps students improve their programming abilities, work on real-world projects, and excel in competitive programming.</p>
                <h1 className='text-2xl'> Our Mission & Vision</h1>
                <p>✅ Mission:
                    Our mission is to empower students with strong programming skills and prepare them for real-world projects and competitive programming challenges.</p>
                <p>✅ Vision:
                    Our vision is to build a strong tech community where students can learn, innovate, and solve real-world problems through technology.</p>

                <div>
                    <h1 className='text-2xl'>What we want</h1>
                    <ul>
                        <li>🔹 Organize coding workshops and seminars</li>
                        <li>🔹 Conduct competitive programming sessions</li>
                        <li>🔹 Develop real-world projects and collaborations</li>
                        <li>🔹 Provide career guidance and internship opportunities</li>
                        <li>🔹 Connect students with industry professionals and mentors</li>
                    </ul>
                </div>
            </div>


             {/* Right Side - Image */}
             <div className='flex-1'>
                    <motion.img
                    src={img}
                    animate={{y: [50,100,50]}}
                    transition={{duration:10,repeat:Infinity}}
                        className="max-w-sm w-48 md:w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-700" />
                    <motion.img
                    src={img1}
                    animate={{x: [100,150,100]}}
                    transition={{duration:10,repeat:Infinity}}
                        className="max-w-sm w-48 md:w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-red-700" />
                    </div>

        </div>
    )
}
