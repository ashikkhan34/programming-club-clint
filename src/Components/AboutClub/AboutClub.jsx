import React from 'react'
import img from '../../assets/room.jfif'
import img1 from '../../assets/course/wd-1.jpg'
export default function AboutClub() {
    return (
        <div className='md:flex gap-5 p-9 bg-green-100 mb-8'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='w-4/6 bg-green-200 p-4 rounded-2xl'>
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

            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='w-2/6 relative '>
                < img className='rounded-t-full mt-8 ml-8 border-cyan-500 border-4 border-dotted p-2 ' src={img} alt="" />
                <img className='rounded-t-full w-64 ml-28 border-green-200 border-8 absolute -mt-32 ' src={img1} alt="" />
            </div>

        </div>
    )
}
