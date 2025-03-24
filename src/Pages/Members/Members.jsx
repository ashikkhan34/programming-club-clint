
import React, { useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { FaSearch, FaUsers } from 'react-icons/fa'
import MemberCard from './MemberCard'

export default function Members() {
  const axiosPublic = useAxiosPublic()
  const [search, setSearch] = useState('')

  const { data: members = [] } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosPublic.get('/members')
      return res.data
    }
  })

  // Filter members based on search input
  const filteredMembers = members.filter(member =>
    member.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='mt-16'>
      <div className='bg-gray-800  h-32 md:h-14 text-center md:flex justify-between px-6'>
        <h1 className='text-center justify-center flex py-3 text-2xl font-bold text-purple-900'>
          All Members : {filteredMembers.length} <FaUsers className='ml-2 mt-1' />
        </h1>

        <div className='flex'>
          <FaSearch className='text-2xl text-white mt-5 '></FaSearch>
          <input
            type="search"
            placeholder='   Search by Title'
            className='bg-gray-700 text-white w-full md:w-[300px] justify-center mx-auto  h-8 mt-4 px-3 outline-none rounded'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-900 p-4'>
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))
        ) : (
          <p className="text-center text-white col-span-full">No members found</p>
        )}
      </div>
    </div>
  )
}
