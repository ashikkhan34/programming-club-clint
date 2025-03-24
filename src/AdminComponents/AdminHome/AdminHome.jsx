import React from 'react'
import useAuth from '../../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { FaUsers } from 'react-icons/fa'
import lottee from '../../assets/Animation - 1742313286293.json'
import Lottie from 'lottie-react'


export default function AdminHome() {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  //get all users
  const {data : users =[]} = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
      const res = await axiosSecure.get('/users')
      return res.data
    }
  })
  //get all members
    const { data: members = [] } = useQuery({
      queryKey: ['members'],
      queryFn: async () => {
        const res = await axiosSecure.get('/members')
        return res.data
      }
  
    })
    //get all projects
    const {data : projects = []} = useQuery({
        queryKey:['projects'],
        queryFn: async() =>{
          const res = await axiosSecure.get('/projects')
          return res.data
        }
      })
  return (
    <div>
      <div className='bg-blue-950 top-0 w-full md:h-16'>
        <h1 className='md:text-2xl text-center p-5'>Welcome to Admin Home <span className='text-blue-600'>{user?.displayName}</span></h1>

      </div>

      <div className="md:stats block shadow  text-white">
        <div className="stat">
          <div className="stat-figure text-primary">
           <FaUsers className='text-2xl -ml-32 md:-ml-0'></FaUsers>
          </div>
          <div className="stat-title text-cyan-400">Total Users</div>
          <div className="stat-value text-primary">{users.length}</div>
          <div className="stat-desc text-cyan-400">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <FaUsers className='text-2xl -ml-32 md:-ml-0'></FaUsers>

          </div>
          <div className="stat-title text-cyan-400">All Members</div>
          <div className="stat-value text-secondary">{members.length}</div>
          <div className="stat-desc text-cyan-400">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full -ml-32 md:-ml-0">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-value">{projects.length}</div>
          <div className="stat-title text-cyan-400">Projects done</div>
          <div className="stat-desc text-secondary ">31 tasks remaining</div>
        </div>

        
      </div>
      <div >
            <Lottie className='h-96' animationData={lottee}></Lottie>
        </div>
    </div>
  )
}
