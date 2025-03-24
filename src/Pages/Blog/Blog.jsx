import React from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

export default function Blog() {
  const axiosPublic = useAxiosPublic()
  const {data : photos = [] } = useQuery({
    queryKey: ['photos'],
    queryFn: async() => {
      const res = await axiosPublic.get('/photos')
      return res.data
    }
  })
  return (
    <div className='mt-16'>
      <div className='h-10 justify-center bg-green-100'>
        <h1 className='text-center pt-2'>All Photos: {photos.length}</h1>
      </div>
      <div className='grid md:grid-cols-5 gap-4 space-y-3 bg-cyan-900'>
        {
          photos.map(photo => (
            <div key={photo._id}>
              <img className='h-80 transition delay-150 rounded-2xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' src={photo.image} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
