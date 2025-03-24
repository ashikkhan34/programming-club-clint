import React from 'react'

export default function MemberCard({ member }) {
    return (
        <div>
            <div className="transition-all duration-700 ease-in-out card hover:bg-purple-900 hover:rounded-4xl  bg-gray-800 text-white hover:text-red-700  shadow-sm mt-5 mb-2 ">
                <figure>
                    <img
                        src={member?.image}
                        className='rounded-full mt-2 w-32 h-32' />
                </figure>
                <div className="card-body  text-center">
                    <h2 className="card-title ml-16 text-center">Name : {member?.name}</h2>
                    <p><strong>Title : </strong>{member.category}</p>
                    <p><strong>Department </strong>: {member.department}</p>
                    <p> <strong>Semester </strong>: {member.position}</p>
                </div>
            </div>
        </div>
    )
}
