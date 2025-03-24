import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaUsers } from 'react-icons/fa'
import { MdAutoDelete } from 'react-icons/md'
import Swal from 'sweetalert2'

export default function EventMembers() {
    const axiosSecure = useAxiosSecure()
    const {data: eventMembers = [],refetch} = useQuery({
        queryKey:['eventMembers'],
        queryFn:async() =>{
            const res = await axiosSecure.get('/eventMembers')
            return res.data
        }
    })

     const handleDeleteUser = (user) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert dis!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/eventMembers/${user._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
        }
  return (
    <div >
                <div className='mb-6 top-0 w-full h-12 bg-blue-950 '>
                    <h1 className='py-3 text-lg font-bold  items-center flex justify-center'>All Users: {eventMembers.length} <FaUsers className='ml-3 text-xl'></FaUsers> </h1>
                </div>
    
                <div>
                    <div className="overflow-x-auto text-white">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-gray-400'>
                                    <th>No.</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th className="hidden md:table-cell">Email</th>
                                    <th>Semester</th>
                                    <th>Roll</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    eventMembers.map((user,index) => <tr key={user._id} className='hover:bg-blue-900'>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user.image}
                                                             />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.name}</td>
                                        <td className="hidden md:table-cell">{user.email}</td>
                                        <td className="hidden md:table-cell">{user.position}</td>
                                        <td className="hidden md:table-cell">{user.roll}</td>
                                        <td><button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg"><MdAutoDelete className='text-red-700' /></button></td>
                                    </tr>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  )
}
