import React from 'react'
import ashik from '../../assets/gallery-photos/ashik.png'
import { MdMore } from 'react-icons/md'
import joy from '../../assets/joy.jpg'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <div className='mt-16'>
        <div className="hero bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              data-aos="fade-left"
              data-aos-duration="3000"
              src={ashik}
              className="border-b-4 border-blue-400 drop-shadow-xl rounded-b-full" />
            <div data-aos="fade-up"
              data-aos-duration="3000" className='p-5'>
              <h1 className="text-5xl font-bold">Ashik khan</h1>
              <p className="py-6">
                I am Md. Ashik Khan, an engineer, MERN stack developer, and digital marketer. I am currently working as a front-end developer and have experience in React.js, Next.js, Tailwind CSS, Node js and Mongo DB. I have completed a MERN Stack Development course and have worked on multiple projects, including a Bistro Boss Restaurant with real-time updates, and Firebase authentication.

                Additionally, I am lead a team and have built a website for your college's programming club. I am also interested in analyzing search data and have  some full-stack website.
              </p>
              <div className='flex gap-2'>
                <button className="btn bg-blue-500 hover:bg-blue-900 text-white"><a href="https://ashikkhan404.surge.sh/" target='_blank'>About more</a> <MdMore></MdMore></button>
                <div className='bg-blue-300 hover:bg-purple-300 shadow rounded-xl hover:rounded-3xl   h-10 w-52'>

                  <div className='flex justify-evenly items-center  py-2'>
                    <a href="https://www.facebook.com/profile.php?id=100069225215551" target='_blank' className='text-2xl text-blue-600 shadow-2xl'><FaFacebook className='shadow-2xl'></FaFacebook></a>

                    <a href="https://www.linkedin.com/in/ashik-khan-44abbb300/" target='_blank' className='text-2xl text-blue-600 shadow-2xl'> <FaLinkedin></FaLinkedin></a>

                    <a href="https://github.com/ashikkhan34" className='text-2xl text-gray-600 shadow-2xl' target='_blank'> <FaGithub></FaGithub></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-linear-to-r/hsl from-indigo-500 to-teal-400 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={joy}
              className="max-w-lg rounded-lg shadow-2xl" />
            <div data-aos="fade-up"
              data-aos-duration="3000" className='ml-20'>
              <h1 className="text-5xl font-bold">Md. Joy Rahman</h1>
              <p className="py-6">
                Md. Joy Rahman, a dedicated student of Computer Science and Technology (CST) at Pabna Polytechnic Institute, is passionate about technology and innovation. With a strong foundation in programming and software development, he is continuously exploring new advancements in the field. His interests range from web development and database management to problem-solving and system design. As a driven and enthusiastic learner, he actively engages in projects that enhance his skills and knowledge. Md. Joy Rahman is always eager to learn, adapt, and contribute to the ever-evolving world of technology.
              </p>
              <button className="btn btn-primary"><a href="https://www.facebook.com/Loser.J02" target='_blank'>About More</a></button>
            </div>
          </div>
        </div>
        <div className='border'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.3364566431283!2d89.2415417!3d24.01919770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b369a35dcfb%3A0x3c8cff0140e21bb8!2sPabna%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1742012415407!5m2!1sen!2sbd" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
