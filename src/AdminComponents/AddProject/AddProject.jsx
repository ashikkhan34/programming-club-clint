import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

//IMAGE HOSTING
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProject = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const  onSubmit = async(data) => {
        //image upload to imgbb and then get an url
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            //now send the menu item data to the server with the image url
            const projectsInfo = {
                projectName : data.projectName,
                projectCategory: data.projectCategory,
                status: data.status,
                liveLink: data.liveLink,
                techStack: data.techStack,
                image : res.data.data.display_url
            }
            const projectInfo = await axiosSecure.post('/projects',projectsInfo)
            console.log(projectInfo.data)
            if(projectInfo.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.projectName} is added to the Projects`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        }
        console.log(res.data)
    }
    return (
        <div >
            <div className='h-14 w-full text-center items-center bg-pink-100'>
                <h1 className='py-4 text-pink-950 font-bold'>Add a Project for out Club</h1>
            </div>
            <div className='border-gray-300 p-4 rounded-xl w-full md:w-[600px] mx-auto shadow-2xl mt-10 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Project Name*</span>
                        </div>
                        <input type="text" placeholder=" ProjectName" className="input input-bordered w-full " {...register('projectName',{required:true})} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Project Category*</span>
                        </div>
                        <input type="text" placeholder="Web App, Mobile App, API, SaaS" className="input input-bordered w-full " {...register('ProjectCategory',{required:true})} />
                    </label>
                    <div className=' gap-3'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Status*</span>
                            </div>
                            <select
                                defaultValue='default'
                                {...register('status',{required:true})}
                                className="select select-ghost w-full ">
                                <option disabled selected value='default'>Status</option>
                                <option value='progress'>In Progress</option>
                                <option value='completed'>Completed</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Live Link*</span>
                            </div>
                            <input type="url" placeholder="Live Link" className="input input-bordered w-full " {...register('liveLink',{required:true})} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Tech Stack*</span>
                            </div>
                            <input type="text" placeholder="React js , Node js , Mongo DB" className="input input-bordered w-full " {...register('techStack',{required:true})} />
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-gray-500'>Project Photo </label> <br />
                    <input
                        {...register('image',{required:true})}
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>

                    <input class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn m-5 w-60 md:ml-32 text-center" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProject;