import React from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { FaDiagramProject } from 'react-icons/fa6'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const axiosPublic = useAxiosPublic()
  const {data : projects = []} = useQuery({
    queryKey:['projects'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/projects')
      return res.data
    }
  })
  return (
    <div className='mt-16'>
      <div className='h-14 bg-linear-to-r/hsl from-indigo-500 to-teal-400'>
        <h1 className='text-xl flex justify-center text-center py-3 font-bold'>All Projects : {projects.length} <FaDiagramProject className='ml-2 mt-2'></FaDiagramProject></h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-blue-950'>
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project}></ProjectCard>
              ))}
            </div>
    </div>
  )
}
