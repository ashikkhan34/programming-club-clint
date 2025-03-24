import Lottie from 'lottie-react'
import React from 'react'
import lottie from '../../assets/error.json'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <Lottie className='w-[500px]  mx-auto' animationData={lottie}></Lottie>
        <h1 className='text-2xl text-center font-bold text-red-600 p-2'>Page not found</h1>
        <button className='btn btn-primary  flex mx-auto w-40'>
            <Link to='/'>Go to Home</Link>
        </button>
    </div>
  )
}
