import React from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { MdAutoDelete } from 'react-icons/md'

export default function DeleteEvent() {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
  const {data : events = [],refetch} = useQuery({
    queryKey:['events'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/events')
      return res.data
    }
  })
  console.log(events)

  const handleDeleteEvent = (event) => {
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
                  axiosSecure.delete(`/events/${event._id}`)
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
    <div>
        <div className="overflow-x-auto">
                <table className="table hover">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            events.map((event, index) => <tr key={event._id} className='hover:bg-slate-100'>
                                <th>{index + 1}</th>
                                <td>{event.eventName}</td>
                                <td className='flex gap-2'>
                                    <Link to={`/dashboard/updateEvent/${event?._id}`}><button className='flex btn bg-green-100'> update<GrUpdate></GrUpdate></button> </Link>

                                    <button onClick={() => handleDeleteEvent(event)} className='flex btn bg-red-100'>delete<MdAutoDelete /></button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
    </div>
  )
}
