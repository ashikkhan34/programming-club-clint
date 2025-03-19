import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Hero from '../../Components/Hero/Hero'
import Course from '../../Components/Course/Course'
import Skills from '../../Components/Skills/Skills'
import Opportunity from '../../Components/Oppertunity/Opportunity'
import AboutClub from '../../Components/AboutClub/AboutClub'
import Review from '../../Components/Review/Review'

export default function Home() {
  return (
    <div className=''>
      <Banner></Banner>
      <Hero></Hero>
      <AboutClub></AboutClub>
      <Course></Course>
      <Skills></Skills>
      <Opportunity></Opportunity>
      <Review></Review>
    </div>
  )
}

