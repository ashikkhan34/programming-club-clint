import React from 'react'
import { FaLink } from 'react-icons/fa6'

export default function ProjectCard({ project }) {
    return (
        <div>
            <div className="card bg-indigo-900 mb-2 shadow-xl mt-5 h-[400px] transition-all duration-700 ease-in-out text-white hover:text-black hover:bg-cyan-500 hover:rounded-4xl">
                <figure>
                    <img
                    className='h-40 '
                        src={project.image}/>
                        
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><strong className='text-sm'>Project Name</strong>: {project.projectName}</h2>
                    <p><strong>TechStack</strong> : {project.techStack}</p>
                    <p><strong>Status</strong> : {project.status}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-primary'><a className='flex' href={project.liveLink} target="_blank">Live link <FaLink className='text-xl  ml-2'></FaLink></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
