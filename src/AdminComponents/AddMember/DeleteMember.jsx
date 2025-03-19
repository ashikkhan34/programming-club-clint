import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr'
import { MdAutoDelete } from 'react-icons/md'

export default function DeleteMember() {
    const axiosSecure = useAxiosSecure()
    const { data: members = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/members')
            return res.data
        }

    })
    //delete a member
    const handleDeleteMember = (member) => {
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
                axiosSecure.delete(`/members/${member._id}`)
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
                            members.map((member, index) => <tr key={member._id} className='hover:bg-slate-100'>
                                <th>{index + 1}</th>
                                <td>{member.name}</td>
                                <td className='flex gap-2'>
                                    <Link to={`/dashboard/updateMember/${member?._id}`}><button className='flex btn bg-green-100'> update<GrUpdate></GrUpdate></button> </Link>

                                    <button onClick={() => handleDeleteMember(member)} className='flex btn bg-red-100'>delete<MdAutoDelete /></button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
