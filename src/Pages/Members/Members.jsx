import React from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { FaUsers } from 'react-icons/fa'
import MemberCard from './MemberCard'

export default function Members() {
  const axiosPublic = useAxiosPublic()
  const { data: members = [] } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosPublic.get('/members')
      return res.data
    }

  })
  return (
    <div className='mt-16'>
      <div className='bg-purple-200 h-14 text-center '>
        <h1 className='text-center justify-center flex py-3 text-2xl font-bold text-purple-900'>All Members : {members.length} <FaUsers className='ml-2 mt-1' ></FaUsers> </h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {members.map((member) => (
          <MemberCard key={member._id} member={member}></MemberCard>
        ))}
      </div>

    </div>
  )
}
