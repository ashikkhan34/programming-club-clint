import React from 'react'
import Marquee from 'react-fast-marquee'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import tailwind from '../../assets/icons/tailwind.png'
import bootstrap from '../../assets/icons/bootstrap.jfif'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import next from '../../assets/icons/next.png'
import firebase from '../../assets/icons/firebase.png'
import express from '../../assets/icons/express.png'
import node from '../../assets/icons/node.png'
import mongodb from '../../assets/icons/mongo.png'
import java from '../../assets/icons/jsva.png'
import python from '../../assets/icons/pithon.png'
import c from '../../assets/icons/c++.png'
import cp from '../../assets/icons/c+++.png'
import laravel from '../../assets/icons/laravel.png'

export default function Skills() {
    return (
        <div className='bg-blue-950'>
            <div className='mt-10'>
                <div className='divider divider-primary w-72 text-center mx-auto'></div>
                <h1 className='text-center text-2xl font-bold text-blue-200'>Programming Language</h1>
                <div className='divider divider-primary w-72 mx-auto'></div>

            </div>
            <Marquee>
                <div className='flex gap-6'>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-lg ml-5'>
                        <h1 className='text-auto mt-2 text-center text-blue-400'>HTML</h1>
                        <img className="mx-auto w-16 p-2 " src={html} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>CSS</h1>
                        <img className="mx-auto  w-16 p-2 " src={css} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Java Script</h1>
                        <img className="mx-auto  w-16 p-2 " src={js} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>React js </h1>
                        <img className="mx-auto  w-16 p-2 " src={react} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Next js</h1>
                        <img className="mx-auto  w-16 p-2 " src={next} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>tailwind</h1>
                        <img className="mx-auto  w-16 p-2 " src={tailwind} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>bootstrap</h1>
                        <img className="mx-auto  w-16 p-2 " src={bootstrap} alt="" />
                    </div>
                </div>
            </Marquee>
            <Marquee direction='right'>
                <div className='flex gap-6'>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-lg ml-5'>
                        <h1 className='text-auto  text-center text-blue-400'>Firebase</h1>
                        <img className=" w-16 p-2 mx-auto  "  src={firebase} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Express</h1>
                        <img className="mx-auto  w-16 p-2 " src={express} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Node js</h1>
                        <img className="mx-auto  w-16 p-2 " src={node} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Mongo DB </h1>
                        <img className="mx-auto  w-16 p-2 " src={mongodb} alt="" />
                    </div>
                </div>
            </Marquee>
            <div>
                <h1 className='text-center text-blue-200 font-bold p-5 text-2xl'>----Case Sensitive Programming Language----</h1>
            </div>
            <Marquee speed={200} pauseOnClick={true}>
                <div className='flex gap-6'>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-lg ml-5'>
                        <h1 className='text-auto mt-2 text-center text-blue-400'>Java</h1>
                        <img className=" w-16 p-2 mx-auto " src={java} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Python</h1>
                        <img className="mx-auto  w-16 p-2 " src={python} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>C</h1>
                        <img className="mx-auto  w-16 p-2 " src={c} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>C++ </h1>
                        <img className="mx-auto  w-16 p-2 " src={cp} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Laravel</h1>
                        <img className="mx-auto  w-16 p-2 " src={laravel} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    )
}
