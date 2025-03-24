
import React from 'react'
import AboutClub from '../../Components/AboutClub/AboutClub'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className=' pt-16 '>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/YT7CRLqG/abstract-dark-blue-futuristic-digital-grid-background.jpg)",
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Programming Club</h1>
            <p className="mb-5">
            The club was founded to create a collaborative environment where students can enhance their programming skills, participate in coding competitions, work on real-world projects, and stay updated with the latest technology trends. It aims to foster a community of passionate developers who learn, innovate, and grow together.
            </p>
            <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div>
       <AboutClub></AboutClub>
      </div>

    </div>
  )
}
